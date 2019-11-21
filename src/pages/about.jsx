import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"

const history = require("../assets/img/history.png")
const img1 = require("../assets/img/HonEph.png");
const img2 = require("../assets/img/john-moore-university.png");
const img3 = require("../assets/img/newspapers-cover.jpg");
const img4 = require("../assets/img/Murtala-Muhammed-International-Airport-Lagos.jpg");
const img5 = require("../assets/img/university-ibadan.png");
const img6 = require("../assets/img/WAEC.jpg");

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
          In 1988 Ephraim Aluebhosele completed his Higher School Certificate in Education.
          <br/>
          Then in 1989 -1992 he Graduated from the University of lbadan, Nigeria Bachelor of Arts (flans), 
          in Classical Studies 1992.
          <br/>
          <br/>
          In 2009 - 2012 he futher completed his
          Master degree in Business Administration in Liverpool John Moore University, UK.
          <br/>
          <br/>
          He was futher made an Honourable Member of the Edo State House of Assembly in the year 2019, 
          and represents Igueben constituency.
        </div>

        <div className="about-me-image">
          <div className="hon-image"></div>
        </div>
      </div>
    </section>

    <section className="container bio-list-section">
      <div className="bio-listing-section">
        <div className="bio-me-image">
          <div className="bio-image__blue-square">
            <img className="bio-image-holder" src={img1} />
          </div>
        </div>
        <div className="bio-me-content">
          <h1 className="time-title">Present</h1>
          <div className="line-circe"></div>
          <p>
            Honourable Member of the Edo State House of Assembly.
          </p>
        </div>
        
      </div>

      <div className="bio-listing-section">
        <div className="bio-me-image">
          <div className="bio-image__blue-square">
            <img className="bio-image-holder" src={img2} />
          </div>
        </div>
        <div className="bio-me-content">
          <h1 className="time-title">2012-2009</h1>
          <div className="line-circe"></div>
          <p>
            Liverpool John Moore University, Liverpool, UK
            Master degree in Business Administration. (MBA 3312)
            MBA Dissertation: An investigation Into Employee Motivation 
            in the Ambrose Alli University, Ekpoma, Edo State, Nigeria
          </p>
        </div>
      </div>

      <div className="bio-listing-section">
        <div className="bio-me-image">
          <div className="bio-image__blue-square">
            <img className="bio-image-holder" src={img3} />
          </div>
        </div>
        <div className="bio-me-content">
          <h1 className="time-title">1994</h1>
          <div className="line-circe"></div>
          <p>
            City Newspaper. Junior Reporter.
            Reporting  to the Editorial room, updating no day to dal local news
          </p>
        </div>
      </div>

      <div className="bio-listing-section">
        <div className="bio-me-image">
          <div className="bio-image__blue-square">
            <img className="bio-image-holder" src={img4} />
          </div>
        </div>
        <div className="bio-me-content">
          <h1 className="time-title">1994-1993</h1>
          <div className="line-circe"></div>
          <p>
            Nigeria Airways: Information Officer From graduation and as part of the mandatory 
            National Youth Service programme was an information officer attached to information 
            desk at Murtala Muhammed International Lagos Nigeria
          </p>
        </div>
      </div>

      <div className="bio-listing-section">
        <div className="bio-me-image">
          <div className="bio-image__blue-square">
            <img className="bio-image-holder" src={img5} />
          </div>
        </div>
        <div className="bio-me-content">
          <h1 className="time-title">1992-1989</h1>
          <div className="line-circe"></div>
          <p>
            University of lbadan, Nigeria Bachelor of Arts (flans), in Classical Studies 1992.
          </p>
        </div>
      </div>

      <div className="bio-listing-section">
        <div className="bio-me-image">
          <div className="bio-image__blue-square">
            <img className="bio-image-holder" src={img6} />
          </div>
        </div>
        <div className="bio-me-content">
          <h1 className="time-title">1988</h1>
          <div className="line-circe"></div>
          <p>
            Higher School Certificate in Education.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
