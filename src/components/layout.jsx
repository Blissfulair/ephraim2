/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode, Fragment } from "react"
import { Helmet } from "react-helmet"
import Loader from 'react-loader-spinner'
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Layout = ({ children, data }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  console.log(data);
  let dom = (
    <div className="loader-center">
    <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
        //  timeout={3000} //3 secs
      />
      </div>
  )
  if (data) {
      dom = (
        <div className="full-height-grow">
          <Header />
          {children}
          <Footer />
        </div>
      )
    }

  return (
    <Fragment>
    {dom}
    </Fragment>
  )
}

export default Layout
