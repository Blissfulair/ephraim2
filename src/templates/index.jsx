import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const img1 = require('../assets/img/img1.png');
const img2 = require('../assets/img/img2.png');
const img3 = require('../assets/img/img3.png');

class IndexPage extends Component {
  state = {
    slideIndex: 1,
    timer: null
  };

  componentDidMount() {
    this.showSlides(this.state.slideIndex);
    // this.autoShowSlides()
    this.state.timer = setTimeout(() => this.autoShowSlides, 1000);
  }
  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  // Next/previous controls
  minusSlides = () => {
    this.showSlides((this.state.slideIndex += -1));
  };

  plusSlides = () => {
    this.showSlides((this.state.slideIndex += 1));
  };

  showSlides = n => {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    if (slides) {
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      if (n > slides.length) {
        this.setState({ slideIndex: 1 });
        return (slides[0].style.display = 'block');
      }
      if (n < 1) {
        this.setState({ slideIndex: slides.length });
        return (slides[slides.length - 1].style.display = 'block');
      }
      slides[this.state.slideIndex - 1].style.display = 'block';
    }
  };

  autoShowSlides = () => {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    if (slides) {
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      if (this.state.slideIndex > slides.length) {
        this.setState({ slideIndex: 1 });
      }
      slides[this.state.slideIndex - 1].style.display = 'block';
      // setTimeout(this.autoShowSlides, 5000) // Change image every 2 seconds
      this.setState({
        slideIndex: this.state.slideIndex + 1
      });
    }
  };

  render() {
    const events = this.props.data.allWordpressWpEvent.edges
      .filter((node, index) => {
        return index === 0 && index <= 4;
      })
      .map(e => {
        const { id, title, acf } = e.node;
        const { location, date } = acf;
        let day = date.split('/')[0];
        const month = date.split('/')[1].slice(0, 3);
        const year = date.split('/')[2];
        if (day[day.length - 1] === 2) {
          day = day + 'nd';
        } else if (day[day.length - 1] === 3) {
          day = day + 'rd';
        } else {
          day = day + 'th';
        }
        return (
          <div className="event-content__box" key={id}>
            <div className="event-content__date">
              <h4 className="event-content__title">
                <span className="bold-date">{day}</span> <br /> {month} <br />{' '}
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
        );
      });

    return (
      <Layout>
        <SEO title="Home" />
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui official deserunt
                mollit anim id est labo um
              </p>
              <a href="">Read More</a>
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
                    do eiusmod tempor incididunt ut labore etdolore magna
                    aliqua. Ut enim ad minim veniam, quisnostrud exercitation
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
                    do eiusmod tempor incididunt ut labore etdolore magna
                    aliqua. Ut enim ad minim veniam, quisnostrud exercitation
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
                    do eiusmod tempor incididunt ut labore etdolore magna
                    aliqua. Ut enim ad minim veniam, quisnostrud exercitation
                  </p>
                </div>
              </div>
            </div>

            {/* Next and previous buttons */}
            <a className="prev" onClick={this.minusSlides}>
              &#10094;
            </a>
            <a className="next" onClick={this.plusSlides}>
              &#10095;
            </a>
          </div>
        </section>

        {/* Video */}
        <section className="container video-section">
          <div className="play-btn">
            <i className="zmdi zmdi-play video__zmdi"></i>
          </div>
          <h3 className="video-title">Watch Video</h3>
        </section>

        {/* Event */}
        <section className="event-hon-section">
          <div className="container event-section">
            <h3 className="event-title">Upcoming Event</h3>

            <div className="event-content">{events}</div>
          </div>
        </section>

        {/* Blog */}
        <section className="main-blog-hon-section">
          <div className="container blog-section">
            <div className="mid-box"></div>
            <h3 className="main-blog-title">Blog</h3>

            <div className="blog-content">
              <div className="blog-content__box">
                <h4 className="blog-content__title">
                  How to be a better Leader
                </h4>
                <p className="blog-content__author">written by Adesuwa Ade</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" className="blog-content__link">
                  Read More
                </a>
              </div>

              <div className="blog-content__box">
                <h4 className="blog-content__title">
                  How to be a better Leader
                </h4>
                <p className="blog-content__author">written by Adesuwa Ade</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" className="blog-content__link">
                  Read More
                </a>
              </div>

              <div className="blog-content__box">
                <h4 className="blog-content__title">
                  How to be a better Leader
                </h4>
                <p className="blog-content__author">written by Adesuwa Ade</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" className="blog-content__link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-hon-section">
          <div className="container contact-section">
            <div className="contact-form">
              <h3 className="contact-title">Contact Form</h3>
              <form className="contact-form__box" action="">
                <label htmlFor="name">What's your name?</label>
                <input type="text" name="name" />

                <label htmlFor="email">What's your email address?</label>
                <input type="text" name="email" />

                <label htmlFor="message">Type your message.</label>
                <input type="text" name="message" />

                <a href="#" className="contact-form__btn">
                  Send Message
                </a>
              </form>
            </div>

            <div className="contact-content">
              <h3 className="contact-content__title">
                <span className="light-font">Contact</span>
                <br />
                Hon. Ephraim
              </h3>
              <div className="contact-content__details">
                <i className="zmdi zmdi-email contact__zmdi"></i>{' '}
                email@gmail.com
              </div>
              <div className="contact-content__details">
                <i className="zmdi zmdi-phone contact__zmdi"></i> +234 816 3534
                3456
              </div>
              <div className="contact-content__details">
                <i className="zmdi zmdi-pin contact__zmdi"></i> Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default IndexPage;

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
  }
`;
