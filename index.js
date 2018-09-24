const express = require('express')
const Prometheus = require('prom-client')
const octokit = require('@octokit/rest')()
const metricsInterval = Prometheus.collectDefaultMetrics()

const {
  githubRepoReferrerViewsGauge,
  githubRepoReferrerViewsUniqueGauge,
  githubRepoTrafficViewsGauge,
  githubRepoTrafficViewsUniqueGauge,
  githubRepoClonesGauge,
  githubRepoClonesUniqueGauge,
  githubRepoContentViewsGauge,
  githubRepoContentViewsUniqueGauge,
  githubRepoStarsGauge,
  githubRepoOpenIssuesGauge,
  githubRepoWatchersGauge,
  githubRepoForksGauge,
} = require('./metrics')


const OWNER = process.env.REPO.split("/")[0]
const REPO = process.env.REPO.split("/")[1]

octokit.authenticate({
  type: 'token',
  token: process.env.GITHUB_TOKEN
})


const collectGithubRepoReferrerMetrics = async () => {
  // Get the top 10 referrers over the last 14 days.

  try {
    const { data, status, headers } = await octokit.repos.getReferrers({
      owner: OWNER,
      repo: REPO,
    })


    data.forEach((entry, idx) => {
      githubRepoReferrerViewsGauge.set({ repo: REPO, referrer: entry.referrer }, entry.count)
      githubRepoReferrerViewsUniqueGauge.set({ repo: REPO, referrer: entry.referrer }, entry.uniques)
    })

    return
  } catch (err) {
    console.log(err)
  }
}

const collectGithubRepoTrafficViewsMetrics = async () => {
  // Get the total number of views and breakdown per day.

  try {

    const { data, status, headers } = await octokit.repos.getViews({
      owner: OWNER,
      repo: REPO,
    })


    githubRepoTrafficViewsGauge.set({ repo: REPO }, data.count)
    githubRepoTrafficViewsUniqueGauge.set({ repo: REPO }, data.uniques)

    return
  } catch (err) {
    console.log(err)
  }
}


const collectGithubRepoClonesMetrics = async () => {
  // Get the total number of clones and breakdown per day or week for the last 14 days.

  try {

    const { data, status, headers } = await octokit.repos.getClones({
      owner: OWNER,
      repo: REPO,
    })


    githubRepoClonesGauge.set({ repo: REPO }, data.count)
    githubRepoClonesUniqueGauge.set({ repo: REPO }, data.uniques)

    return
  } catch (err) {
    console.log(err)
  }
}



const collectGithubRepoContentMetrics = async () => {
  // Get the total views from top 10 popular content

  try {

    const { data, status, headers } = await octokit.repos.getPaths({
      owner: OWNER,
      repo: REPO,
    })

    data.forEach((entry, idx) => {
      githubRepoContentViewsGauge.set({ repo: REPO, path: entry.path }, entry.count)
      githubRepoContentViewsUniqueGauge.set({ repo: REPO, path: entry.path }, entry.uniques)
    })

    return
  } catch (err) {
    console.log(err)
  }
}


const collectGithubRepoMetrics = async () => {

  try {

    const { data, status, headers } = await octokit.repos.get({
      owner: OWNER,
      repo: REPO,
    })

    githubRepoStarsGauge.set({ repo: REPO }, data.stargazers_count)
    githubRepoOpenIssuesGauge.set({ repo: REPO }, data.open_issues_count)
    githubRepoWatchersGauge.set({ repo: REPO }, data.watchers_count)
    githubRepoForksGauge.set({ repo: REPO }, data.forks_count)

    return
  } catch (err) {
    console.log(err)
  }
}

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})


app.get('/metrics', async (req, res) => {
  res.set('Content-Type', Prometheus.register.contentType)

  await Promise.all([
    collectGithubRepoReferrerMetrics(),
    collectGithubRepoTrafficViewsMetrics(),
    collectGithubRepoClonesMetrics(),
    collectGithubRepoContentMetrics(),
    collectGithubRepoMetrics(),
  ])

  console.log(`Metrics collected for ${OWNER}/${REPO}`);

  res.end(Prometheus.register.metrics())
})

const port = 5001
const server = app.listen(port, () => {
  console.log(`App server listening on port ${port}!`)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  clearInterval(metricsInterval)

  server.close((err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    process.exit(0)
  })
})
