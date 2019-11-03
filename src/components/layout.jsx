import React, { Component } from "react"
import { Helmet } from "react-helmet"


import Header from "./header"
import Footer from "./footer"
import "./layout.css"

class Layout extends Component {

  render() {
    const { children, data } = this.props

    return (
      <div className="full-height-grow">
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
