import React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./event.css"
const imageSrc = require("../assets/img/placeholder.png")

const EventPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  const event = group.map(({ node }) => {
    const { id, title, acf } = node
    const { location, date } = acf
    let day = date.split("/")[0]
    const month = date.split("/")[1].slice(0, 3)
    const year = date.split("/")[2]
    if (day[day.length - 1] === 2) {
      day = day + "nd"
    } else if (day[day.length - 1] === 3) {
      day = day + "rd"
    } else {
      day = day + "th"
    }
    return (
      <div className="event-content__box" key={id}>
        <div className="event-content__date">
          <h4 className="event-content__title">
            <span className="bold-date">{day}</span> <br /> {month} <br />{" "}
            {year}
          </h4>
        </div>
        <div className="event-content__venue">
          <h4>{title}</h4>
          <p>
            <i className="zmdi zmdi-pin event__zmdi"></i> {location}
          </p>
        </div>
      </div>
    )
  })
  return (
    <Layout data={pageContext}>
      <SEO title="Events - The Hon. Ephraim Events Page" />
      <section className="main-event-hon-section">
        <div className="container event-section">
          <h3 className="event-year">All Events</h3>

          <div className="event-content">
            {event ? event : <p>No Event Created Yet!!!</p>}
          </div>
        </div>

        <div className="container event-section">
          <div className="more-event">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default EventPage
