# metrics

Below are an example of the metrics as exposed by this exporter. System metrics
are exposed at runtime.


```
# HELP github_repo_referrer_views Total views from top 10 referrer for given repository
# TYPE github_repo_referrer_views gauge
github_repo_referrer_views{repo="gatsby",referrer="Google"} 54271
github_repo_referrer_views{repo="gatsby",referrer="gatsbyjs.org"} 10025
github_repo_referrer_views{repo="gatsby",referrer="github.com"} 6087
github_repo_referrer_views{repo="gatsby",referrer="next.gatsbyjs.org"} 821
github_repo_referrer_views{repo="gatsby",referrer="DuckDuckGo"} 607
github_repo_referrer_views{repo="gatsby",referrer="using-gatsby-image.gatsbyjs.org"} 460
github_repo_referrer_views{repo="gatsby",referrer="npmjs.com"} 333
github_repo_referrer_views{repo="gatsby",referrer="using-drupal.gatsbyjs.org"} 187
github_repo_referrer_views{repo="gatsby",referrer="image-processing.gatsbyjs.org"} 185
github_repo_referrer_views{repo="gatsby",referrer="using-contentful.gatsbyjs.org"} 160

# HELP github_repo_referrer_views_unique Total unique visitors from top 10 referrers for given repository
# TYPE github_repo_referrer_views_unique gauge
github_repo_referrer_views_unique{repo="gatsby",referrer="Google"} 11436
github_repo_referrer_views_unique{repo="gatsby",referrer="gatsbyjs.org"} 1810
github_repo_referrer_views_unique{repo="gatsby",referrer="github.com"} 1208
github_repo_referrer_views_unique{repo="gatsby",referrer="next.gatsbyjs.org"} 129
github_repo_referrer_views_unique{repo="gatsby",referrer="DuckDuckGo"} 199
github_repo_referrer_views_unique{repo="gatsby",referrer="using-gatsby-image.gatsbyjs.org"} 32
github_repo_referrer_views_unique{repo="gatsby",referrer="npmjs.com"} 52
github_repo_referrer_views_unique{repo="gatsby",referrer="using-drupal.gatsbyjs.org"} 9
github_repo_referrer_views_unique{repo="gatsby",referrer="image-processing.gatsbyjs.org"} 21
github_repo_referrer_views_unique{repo="gatsby",referrer="using-contentful.gatsbyjs.org"} 16

# HELP github_repo_traffic_views Total views for given repository
# TYPE github_repo_traffic_views gauge
github_repo_traffic_views{repo="gatsby"} 163675

# HELP github_repo_traffic_views_unique Total unique visitors for given repository
# TYPE github_repo_traffic_views_unique gauge
github_repo_traffic_views_unique{repo="gatsby"} 21926

# HELP github_repo_clones Total number of clones for given repository
# TYPE github_repo_clones gauge
github_repo_clones{repo="gatsby"} 17280

# HELP github_repo_clones_unique Total number of clones for given repository
# TYPE github_repo_clones_unique gauge
github_repo_clones_unique{repo="gatsby"} 578

# HELP github_repo_content_views Total views from top 10 content for given repository
# TYPE github_repo_content_views gauge
github_repo_content_views{repo="gatsby",path="/gatsbyjs/gatsby"} 13269
github_repo_content_views{repo="gatsby",path="/gatsbyjs/gatsby/issues"} 6426
github_repo_content_views{repo="gatsby",path="/gatsbyjs/gatsby/pulls"} 2409
github_repo_content_views{repo="gatsby",path="/gatsbyjs/gatsby/search"} 2359
github_repo_content_views{repo="gatsby",path="/gatsbyjs/gatsby/releases"} 1886
github_repo_content_views{repo="gatsby",path="/gatsbyjs/gatsby/tree/master/examples"} 1552
github_repo_content_views{repo="gatsby",path="/gatsbyjs/gatsby/tree/master/packages"} 1143
github_repo_content_views{repo="gatsby",path="/gatsbyjs/gatsby/projects/2"} 1020
github_repo_content_views{repo="gatsby",path="/gatsbyjs/gatsby/issues/1767"} 764
github_repo_content_views{repo="gatsby",path="/gatsbyjs/gatsby/tree/master/examples/using-redux"} 676

# HELP github_repo_content_views_unique Total unique views from top 10 content for given repository
# TYPE github_repo_content_views_unique gauge
github_repo_content_views_unique{repo="gatsby",path="/gatsbyjs/gatsby"} 6634
github_repo_content_views_unique{repo="gatsby",path="/gatsbyjs/gatsby/issues"} 1241
github_repo_content_views_unique{repo="gatsby",path="/gatsbyjs/gatsby/pulls"} 347
github_repo_content_views_unique{repo="gatsby",path="/gatsbyjs/gatsby/search"} 466
github_repo_content_views_unique{repo="gatsby",path="/gatsbyjs/gatsby/releases"} 535
github_repo_content_views_unique{repo="gatsby",path="/gatsbyjs/gatsby/tree/master/examples"} 921
github_repo_content_views_unique{repo="gatsby",path="/gatsbyjs/gatsby/tree/master/packages"} 560
github_repo_content_views_unique{repo="gatsby",path="/gatsbyjs/gatsby/projects/2"} 680
github_repo_content_views_unique{repo="gatsby",path="/gatsbyjs/gatsby/issues/1767"} 654
github_repo_content_views_unique{repo="gatsby",path="/gatsbyjs/gatsby/tree/master/examples/using-redux"} 210

# HELP github_repo_stars Total number of Stars for given repository
# TYPE github_repo_stars gauge
github_repo_stars{repo="gatsby"} 25953

# HELP github_repo_open_issues Total number of open issues for given repository
# TYPE github_repo_open_issues gauge
github_repo_open_issues{repo="gatsby"} 692

# HELP github_repo_watchers Total number of watchers/subscribers for given repository
# TYPE github_repo_watchers gauge
github_repo_watchers{repo="gatsby"} 25953

# HELP github_repo_forks Total number of forks for given repository
# TYPE github_repo_forks gauge
github_repo_forks{repo="gatsby"} 2954
```
