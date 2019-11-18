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
          1994 - City Newspaper. Junior Reporter.
          Reporting  to the Editorial room, updating no day to dal local news
          <br/>
          <br/>
          1993- 1994 - Nigeria Airways: Information Officer
          From graduation and as part of the mandatory National Youth Service programme was an information officer attached to information desk at Murtala Muhammed International Lagos Nigeria
          <br/>
          <br/>
          <h3> Education </h3>
          2009- 2012 Liverpool John Moore University, Liverpool, UK
          Master degree in Business Administration. (MBA 3312)
          MBA Dissertation: An investigation Into Employee Motivation in the Ambrose Alli University, Ekpoma, Edo State, Nigeria
          <br/>
          <br/>
          1989 -1992: University of lbadan, Nigeria Bachelor of Arts (flans), in Classical Studies 1992.
          <br/>
          <br/>
          1988: Higher School Certificate in Education.
          <br/>
          <br/>
        </div>

        <div className="about-me-image">
          <div className="hon-image"></div>
        </div>
      </div>
    </section>

    <section className="container bio-list-section">
      <div className="bio-listing-section">
        <div className="bio-me-image">
          <div className="bio-image-joint">
            <div className="bio-image__blue-square"></div>
            <div className="bio-image-holder"></div>
          </div>
        </div>
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
        <div className="bio-me-image">
          <div className="bio-image-joint">
            <div className="bio-image__blue-square"></div>
            <div className="bio-image-holder"></div>
          </div>
        </div>
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
        <div className="bio-me-image">
          <div className="bio-image-joint">
            <div className="bio-image__blue-square"></div>
            <div className="bio-image-holder"></div>
          </div>
        </div>
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
      </div>
    </section>
  </Layout>
)

export default SecondPage
