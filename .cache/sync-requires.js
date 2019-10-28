const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-jsx": hot(preferDefault(require("/home/dukstack/Apps/ephraim/src/templates/blog.jsx"))),
  "component---src-templates-event-jsx": hot(preferDefault(require("/home/dukstack/Apps/ephraim/src/templates/event.jsx"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/home/dukstack/Apps/ephraim/src/templates/post.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/dukstack/Apps/ephraim/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/home/dukstack/Apps/ephraim/src/pages/404.jsx"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/home/dukstack/Apps/ephraim/src/pages/about.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/dukstack/Apps/ephraim/src/pages/index.jsx")))
}

