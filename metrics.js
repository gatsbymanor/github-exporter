const Prometheus = require('prom-client')

exports.githubRepoReferrerViewsGauge = new Prometheus.Gauge({
  name: "github_repo_referrer_views",
  help: "Total views from top 10 referrer for given repository",
  labelNames: ["repo", "referrer"]
})

exports.githubRepoReferrerViewsUniqueGauge = new Prometheus.Gauge({
  name: "github_repo_referrer_views_unique",
  help: "Total unique visitors from top 10 referrers for given repository",
  labelNames: ["repo", "referrer"]
})

exports.githubRepoTrafficViewsGauge = new Prometheus.Gauge({
  name: "github_repo_traffic_views",
  help: "Total views for given repository",
  labelNames: ["repo"]
})

exports.githubRepoTrafficViewsUniqueGauge = new Prometheus.Gauge({
  name: "github_repo_traffic_views_unique",
  help: "Total unique visitors for given repository",
  labelNames: ["repo"]
})

exports.githubRepoClonesGauge = new Prometheus.Gauge({
  name: "github_repo_clones",
  help: "Total number of clones for given repository",
  labelNames: ["repo"]
})

exports.githubRepoClonesUniqueGauge = new Prometheus.Gauge({
  name: "github_repo_clones_unique",
  help: "Total number of clones for given repository",
  labelNames: ["repo"]
})

exports.githubRepoContentViewsGauge = new Prometheus.Gauge({
  name: "github_repo_content_views",
  help: "Total views from top 10 content for given repository",
  labelNames: ["repo", "path"]
})

exports.githubRepoContentViewsUniqueGauge = new Prometheus.Gauge({
  name: "github_repo_content_views_unique",
  help: "Total unique views from top 10 content for given repository",
  labelNames: ["repo", "path"]
})

exports.githubRepoStarsGauge = new Prometheus.Gauge({
  name: "github_repo_stars",
  help: "Total number of Stars for given repository",
  labelNames: ["repo"]
})

exports.githubRepoOpenIssuesGauge = new Prometheus.Gauge({
  name: "github_repo_open_issues",
  help: "Total number of open issues for given repository",
  labelNames: ["repo"]
})

exports.githubRepoWatchersGauge = new Prometheus.Gauge({
  name: "github_repo_watchers",
  help: "Total number of watchers/subscribers for given repository",
  labelNames: ["repo"]
})

exports.githubRepoForksGauge = new Prometheus.Gauge({
  name: "github_repo_forks",
  help: "Total number of forks for given repository",
  labelNames: ["repo"]
})
