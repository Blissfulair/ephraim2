import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./post.css"

const imageSrc = require("../assets/img/placeholder.png")

class PostTemplate extends Component {
  render() {
    const currentPost = this.props.data.wordpressPost

    const resolutions = currentPost.featured_media
      ? currentPost.featured_media.localFile.childImageSharp.resolutions
      : null


    return (
      <Layout data={currentPost}>
        <SEO title={`${currentPost.title} - Blog Post`} />

        <section class="blog-single-section">
          <div className="blog-container">
            <div class="blog-single-title__page">
              <div class="blog-single-heading">
                <h1
                  className="blog-single-title"
                  dangerouslySetInnerHTML={{ __html: currentPost.title }}
                />
                <h3 class="blog-single-subtitle">{currentPost.author.name}</h3>
                <div class="title-line-blog"></div>
              </div>
            </div>

            <div class="blog-single-details">
              <div dangerouslySetInnerHTML={{ __html: currentPost.excerpt }} />
              {resolutions ? (
                <img src={resolutions.src} alt="" />
              ) : (
                <img src={imageSrc} alt="" />
              )}
              <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
            </div>
            {/* <Link to="/blog">See All Articles</Link> */}
            <div class="blog-single-pagination">
              <Link to="/blog">See All Articles</Link>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      excerpt
      content
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      featured_media {
        localFile {
          childImageSharp {
            resolutions(width: 700, height: 400) {
              src
              width
              height
            }
          }
        }
      }
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
