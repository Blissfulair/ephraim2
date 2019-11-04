import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.css"
const imageSrc = require("../assets/img/placeholder.png")

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  console.log(pageContext)

  return (
    <Layout data={pageContext}>
      <SEO title="The Hon. Ephraim Blog Page" />
      <section className="blog-hon-section">
        <div className="container blog-section">
          <h1 className="blog-title">The Hon. Ephraim's</h1>
          <h3 className="blog-subtitle">
            Blog <span>----------</span>
          </h3>
        </div>
      </section>

      <section className="blog-lists">
        <div className="blog-section__page">
          <div className="blog-content-section">
            {group ? (
              group.map(({ node }) => (
                <div className="blog-post" key={node.id}>
                  {node.featured_media ? (
                    <div className="blog-image">
                      <Link to={`blog/${node.slug}`}>
                        <img
                          src={
                            node.featured_media.localFile.childImageSharp
                              .resolutions.src
                          }
                          alt=""
                        />
                      </Link>
                    </div>
                  ) : (
                    <Link to={`blog/${node.slug}`}>
                      <div className="blog-image">
                        <img src={imageSrc} alt="" />
                      </div>
                    </Link>
                  )}
                  <div className="blog-info">
                    <div className="blog-words">
                      <h1>
                        <Link
                          to={`blog/${node.slug}`}
                          dangerouslySetInnerHTML={{ __html: node.title }}
                        />
                      </h1>
                      <h4>Written by {node.author.name}</h4>
                      <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </div>
                    <div className="blog-readmore">
                      <Link to={`blog/${node.slug}`}>Read More</Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>No Post Created Yet!!!</h1>
            )}
          </div>

          <div className="pagination">
            {index !== 1 ? (
              <div className="previousLink">
                <i className="zmdi zmdi-arrow-left pagination-left"></i>
                <NavLink
                  test={first}
                  url={`/blog/${previousUrl}`}
                  text="Go to Previous Page"
                />
              </div>
            ) : null}
            {pageCount > 1 ? (
              <p>
                Page {index} of {pageCount}
              </p>
            ) : null}
            {index !== pageCount ? (
              <div className="nextLink">
                <NavLink
                  test={last}
                  url={`/blog/${nextUrl}`}
                  text="Go to Next Page"
                />
                <i className="zmdi zmdi-arrow-right pagination-right"></i>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage
