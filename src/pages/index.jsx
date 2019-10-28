import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

const img1 = require("../assets/img/img1.png")
const img2 = require("../assets/img/img2.png")
const img3 = require("../assets/img/img3.png")

let slideIndex = 1

const minusSlides = () => {
  showSlides((slideIndex += -1))
}

const plusSlides = () => {
  showSlides((slideIndex += 1))
}

const showSlides = n => {
  let i
  let slides = document.getElementsByClassName("mySlides")
  if (slides) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
    }
    if (n > slides.length) {
      slideIndex = 1
      return (slides[slideIndex - 1].style.display = "block")
    }
    if (n < 1) {
      slideIndex = slides.length
      return (slides[slideIndex - 1].style.display = "block")
    }
    slides[slideIndex - 1].style.display = "block"
  }
}

const autoShowSlides = () => {
  let i
  let slides = document.getElementsByClassName("mySlides")
  if (slides.length) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
    }

    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block"
    setTimeout(autoShowSlides, 5000) // Change image every 5 seconds
    slideIndex++
  }
}

let showVideo = false // Change showViedo to true and src of videoPlayerContent iframe to hon. ephraim's portfolio youtube video
const videoPlayerContent = showVideo
  ? `<iframe
      class="fw-video"
      src="https://www.youtube.com/embed/t4b72JKvko8?autoplay=1"
      width="100%"
      height="100%"
      frameborder="0"
      webkitallowfullscreen=""
      mozallowfullscreen=""
      allowfullscreen=""
    ></iframe>`
  : `<p>Sorry Video Is Not Available At The Moment</p>`

const openVideoModal = () => {
  let videoPlayer = document.querySelector(".video-player")
  let darkModal = document.querySelector(".dark-modal")
  let closeVideo = document.querySelector(".close-video")
  videoPlayer.innerHTML = videoPlayerContent
  darkModal.classList.add("open-modal")
  closeVideo.classList.add("display-close-video")
}

const closeVideoModal = () => {
  let videoPlayer = document.querySelector(".video-player")
  let darkModal = document.querySelector(".dark-modal")
  let closeVideo = document.querySelector(".close-video")
  showVideo = false
  videoPlayer.innerHTML = ""
  darkModal.classList.remove("open-modal")
  closeVideo.classList.remove("display-close-video")
}

export const pageQuery = graphql`
  query {
    allWordpressWpEvent {
      edges {
        node {
          id
          slug
          title
          acf {
            location
            date
          }
        }
      }
    }

    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          excerpt
          author {
            name
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  useEffect(() => {
    const timer = autoShowSlides()
    return () => clearTimeout(timer)
  }, [])

  const events = data.allWordpressWpEvent.edges
    .filter((node, index) => {
      return index <= 3
    })
    .map(e => {
      const { id, title, acf } = e.node
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

  const posts = data.allWordpressPost.edges
    .filter((node, index) => {
      return index <= 2
    })
    .map(e => {
      const { id, title, slug, excerpt, author } = e.node
      const { name } = author
      return (
        <div className="blog-content__box" key={id}>
          <h4
            className="blog-content__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="blog-content__author">written by {name}</p>
          <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Link to={`/blog/${slug}`} className="blog-content__link">
            Read More
          </Link>
        </div>
      )
    })

  return (
    <Layout>
      <SEO title="Home" />
      <div className="dark-modal">
        <i
          onClick={closeVideoModal}
          className="zmdi zmdi-close close-video"
        ></i>
        <div className="video-player"></div>
      </div>
      <section className="home-section">
        <div className="container bio-section">
          <div className="bio-top">
            <div className="bio-name">
              <div className="bio-name__blue-square"></div>
              <h3 className="bio-title">
                Honourable
                <br />
                Ephraim
                <br />
                Aluebhosele
              </h3>
              <div className="bio-social">
                <i className="zmdi zmdi-facebook bio-social__zmdi"></i>
                <i className="zmdi zmdi-twitter bio-social__zmdi"></i>
                <i className="zmdi zmdi-instagram bio-social__zmdi"></i>
                <i className="zmdi zmdi-linkedin bio-social__zmdi"></i>
              </div>
            </div>

            <div className="bio-image">
              <div className="hon-image"></div>
            </div>
          </div>

          <div className="bio-bottom">
            <div className="bio-mission">
              <div className="bio-mission__head">
                <h3>MISSION</h3>
              </div>
              <div className="bio-mission__content">
                <p>
                  Lorem ipsum dolor ectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>

            <div className="bio-vision">
              <div className="bio-vision__head">
                <h3>VISION</h3>
              </div>
              <div className="bio-vision__content">
                <p>
                  Lorem ipsum dolor ectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-hon-section">
        <div className="container about-section">
          <div className="about-image">
            <div className="hon-image"></div>
            <h3 className="about-title">
              <span className="light-font">About</span>
              <br />
              Ephraim
            </h3>
          </div>

          <div className="about-content">
            <h3>Ephraim Sele Otaigbe Aluebhosele</h3> Member, Representing
            Igueben State Constituency at the Edo State House of Assembly -
            EDHA.
            <br />
            <br />
            <h3>EDUCATION:</h3>
            University of Ibadan (BA HONS)
            <br />
            Liverpool John Moore University, Liverpool. UK. (MBA)
            <br />
            <br />
            <h3>Political Party:</h3>
            All Progressives Congress (APC)
            <br />
            <br />
            <h3>Political Interest:</h3>
            Economy,
            <br />
            Employment,
            <br />
            Small Business,
            <br />
            Equality,
            <br />
            Education,
            <br />
            Agriculture,
            <br />
            Justice,
            <br />
            Community and Youth Engagement.
            <br />
            <br />
            <h3>House Committees Chairman:</h3> Budget Appriopriation & Project
            Monitoring.
            <Link to="/about">Read More</Link>
          </div>
        </div>
      </section>

      {/* Slideshow Portfolio */}
      <section id="portfolio" className="portfolio-hon-section">
        <div className="container slideshow-container">
          <h3 className="portfolio-title">Portfolio</h3>

          {/* Full-width images with number and caption text */}
          <div className="mySlides fade">
            <div className="mySlides-box">
              <div className="numbertext">1 / 3</div>
              <img src={img1} />
              <div className="mySlides__content">
                <h4>Children Foundation</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore etdolore magna aliqua.
                  Ut enim ad minim veniam, quisnostrud exercitation
                </p>
              </div>
            </div>
          </div>

          <div className="mySlides fade">
            <div className="mySlides-box">
              <div className="numbertext">2 / 3</div>
              <img src={img2} />
              <div className="mySlides__content">
                <h4>Children Foundation</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore etdolore magna aliqua.
                  Ut enim ad minim veniam, quisnostrud exercitation
                </p>
              </div>
            </div>
          </div>

          <div className="mySlides fade">
            <div className="mySlides-box">
              <div className="numbertext">3 / 3</div>
              <img src={img3} />
              <div className="mySlides__content">
                <h4>Children Foundation</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore etdolore magna aliqua.
                  Ut enim ad minim veniam, quisnostrud exercitation
                </p>
              </div>
            </div>
          </div>

          {/* Next and previous buttons */}
          <a className="prev" onClick={minusSlides}>
            &#10094;
          </a>
          <a className="next" onClick={plusSlides}>
            &#10095;
          </a>
        </div>
      </section>

      {/* Video */}
      <section className="container video-section">
        <div onClick={openVideoModal} className="play-btn">
          <i className="zmdi zmdi-play video__zmdi"></i>
        </div>
        <h3 className="video-title">Watch Video</h3>
      </section>

      {/* Event */}
      <section className="event-hon-section">
        <div className="container event-section">
          <h3 className="event-title">Upcoming Event</h3>

          <div className="event-content">
            {events ? events : <p>No Event Created Yet!!!</p>}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="main-blog-hon-section">
        <div className="container blog-section">
          <div className="mid-box"></div>
          <h3 className="main-blog-title">Blog</h3>

          <div className="blog-content">
            {posts ? posts : <p>No Post Created Yet!!!</p>}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-hon-section">
        <div className="container contact-section">
          <div className="contact-form">
            <h3 className="contact-title">Contact Form</h3>
            <form
              className="contact-form__box"
              action="POST"
              data-netlify="true"
            >
              <label htmlFor="name">What's your name?</label>
              <input type="text" name="name" />

              <label htmlFor="email">What's your email address?</label>
              <input type="text" name="email" />

              <label htmlFor="message">Type your message.</label>
              <input type="text" name="message" />

              <div data-netlify-recaptcha="true"></div>

              <input
                type="submit"
                className="contact-form__btn"
                value="Send Message"
              />
            </form>
          </div>

          <div className="contact-content">
            <h3 className="contact-content__title">
              <span className="light-font">Contact</span>
              <br />
              Hon. Ephraim
            </h3>
            <div className="contact-content__details">
              <i className="zmdi zmdi-email contact__zmdi"></i>{" "}
              info@ephraimseleedha.com
            </div>
            <div className="contact-content__details">
              <i className="zmdi zmdi-phone contact__zmdi"></i> +234 908 012
              3457
            </div>
            <div className="contact-content__details">
              <i className="zmdi zmdi-pin contact__zmdi"></i> Edo State House of
              Assembly, (Igueben Constituency) Anthony Enahoro Complex, 1 King
              Square, Benin City.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
