import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"

const history = require("../assets/img/history.png")

const SecondPage = () => (
  <Layout data='about'>
    <SEO title="About" />
    <section className="container life-section">
      <div className="years-section">
        <img src={history} alt="History" draggable="false" />
      </div>
      <div className="about-me-section">
        <div className="about-me-content">
          <h1 className="bio-title">My Biography</h1>
          <div className="title-line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui official deserunt mollit
            anim id est labo um
          </p>
          <a href="">Read More</a>
        </div>

        <div className="about-me-image">
          <div className="hon-image"></div>
        </div>
      </div>
    </section>

    <section className="container bio-list-section">
      <div className="bio-listing-section">
        <div className="bio-me-content">
          <h1 className="time-title">Present</h1>
          <div className="line-circe"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et doloreea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <a href="">Read More</a>
        </div>
        <div className="bio-me-image">
          <div className="bio-image-joint">
            <div className="bio-image__blue-square"></div>
            <div className="bio-image-holder"></div>
          </div>
        </div>
      </div>

      <div className="bio-listing-section">
        <div className="bio-me-image">
          <div className="bio-image-joint">
            <div className="bio-image__blue-square"></div>
            <div className="bio-image-holder"></div>
          </div>
        </div>
        <div className="bio-me-content">
          <h1 className="time-title">2013</h1>
          <div className="line-circe"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et doloreea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <a href="">Read More</a>
        </div>
      </div>

      <div className="bio-listing-section">
        <div className="bio-me-content">
          <h1 className="time-title">2010</h1>
          <div className="line-circe"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et doloreea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <a href="">Read More</a>
        </div>
        <div className="bio-me-image">
          <div className="bio-image-joint">
            <div className="bio-image__blue-square"></div>
            <div className="bio-image-holder"></div>
          </div>
        </div>
      </div>

      <div className="bio-listing-section">
        <div className="bio-me-image">
          <div className="bio-image-joint">
            <div className="bio-image__blue-square"></div>
            <div className="bio-image-holder"></div>
          </div>
        </div>
        <div className="bio-me-content">
          <h1 className="time-title">2008</h1>
          <div className="line-circe"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et doloreea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <a href="">Read More</a>
        </div>
      </div>

      <div className="bio-listing-section">
        <div className="bio-me-content">
          <h1 className="time-title">2007</h1>
          <div className="line-circe"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et doloreea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <a href="">Read More</a>
        </div>
        <div className="bio-me-image">
          <div className="bio-image-joint">
            <div className="bio-image__blue-square"></div>
            <div className="bio-image-holder"></div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
