import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./404.css"

const NotFoundPage = () => (
  <Layout data='404'>
    <SEO title="404: Not found" />
    <section className="notfound">
      <div className="container notfound-section">
        <h3 className="notfound-title">404</h3>
        <p>Ooops, seems like you're lost, let me take you back.</p>
        <a href="#" className="notfound__btn">
          <i className="zmdi zmdi-long-arrow-left"></i> Go Back
        </a>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
