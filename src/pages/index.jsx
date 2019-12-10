import React, { Component } from 'react';
import { Link } from 'gatsby';
import Loader from 'react-loader-spinner'

import Layout from '../components/layout';
import SEO from '../components/seo';
import './index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'


const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
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

    allWordpressWpPortfolio {
      edges {
        node {
          id
          slug
          title
          content
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
`;

class IndexPage extends Component {
  state = {
    slideIndex: 1,
    timer: true,
    showVideo: true // Change showViedo to true and src of videoPlayerContent iframe to hon. ephraim's portfolio youtube video
  };

  componentDidMount() {
    // this.showSlides(this.state.slideIndex);
    this.autoShowSlides()
  }
  componentWillUnmount() {
    this.setState({
      timer: false
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => {
        const input = document.querySelectorAll('input[name]')
        input.forEach(i => {
          i.value = '';
        });
        alert('We appreciate you contacting us. One of our colleagues will get back in touch with you soon!')
      })
      .catch(error => alert(error));
  };

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
    if (slides.length) {
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      if (this.state.slideIndex > slides.length) {
        this.setState({ slideIndex: 1 });
      }
      slides[this.state.slideIndex - 1].style.display = 'block';
      if (this.state.timer) {
        setTimeout(this.autoShowSlides, 5000) // Change image every 2 seconds
      }
      this.setState({
        slideIndex: this.state.slideIndex + 1
      });
    }
  };

  openVideoModal = () => {
    const videoPlayerContent = this.state.showVideo
    ? ``
    : `<p>Sorry Video Is Not Available At The Moment</p>`;

    let videoPlayer = document.querySelector('.video-player');
    let darkModal = document.querySelector('.dark-modal');
    let closeVideo = document.querySelector('.close-video');
    videoPlayer.innerHTML = videoPlayerContent;
    darkModal.classList.add('open-modal');
    closeVideo.classList.add('display-close-video');
  };

  closeVideoModal = () => {
    let videoPlayer = document.querySelector('.video-player');
    let darkModal = document.querySelector('.dark-modal');
    let closeVideo = document.querySelector('.close-video');
    videoPlayer.innerHTML = '';
    darkModal.classList.remove('open-modal');
    closeVideo.classList.remove('display-close-video');
  };

  render () {

  const events = this.props.data.allWordpressWpEvent.edges
    .filter((node, index) => {
      return index <= 3;
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

  const posts = this.props.data.allWordpressPost.edges
    .filter((node, index) => {
      return index <= 2;
    })
    .map(e => {
      const { id, title, slug, excerpt, author } = e.node;
      const { name } = author;
      return (
        <div className="blog-content__box" key={id}>
          <h4
            className="blog-content__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="blog-content__author">written by {name}</p>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Link to={`/blog/${slug}`} className="blog-content__link">
            Read More
          </Link>
        </div>
      );
    });

  const portfolioLenght = this.props.data.allWordpressWpPortfolio.edges.length;

  const portfolios = this.props.data.allWordpressWpPortfolio.edges.map((e, index) => {
    const { id, title, content, featured_media } = e.node;
    const { resolutions } = featured_media.localFile.childImageSharp;
    return (
      <div className="mySlides fade" key={id}>
        <div className="mySlides-box">
          <div className="numbertext">
            {index + 1} / {portfolioLenght}
          </div>
          <img src={resolutions.src} alt="" />
          <div className="mySlides__content">
            <h4 dangerouslySetInnerHTML={{ __html: title }} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    );
  });

  const ex = this.props.data.allWordpressPost.edges[0].node.excerpt;
  const port = this.props.data.allWordpressWpPortfolio.edges[0].node.content;

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
  if (ex && port) {
      dom = (
        <Layout data={this.props.data}>
          <SEO title="Home" />
          <div className="dark-modal">
            <i
              onClick={this.closeVideoModal}
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
                    <a target="_blank" href="https://web.facebook.com/ephraim.sele" rel="noopener noreferrer">
                      <i className="zmdi zmdi-facebook bio-social__zmdi"></i>
                    </a>
                    <a target="_blank" href="https://twitter.com/hoiphrontistai" rel="noopener noreferrer">
                      <i className="zmdi zmdi-twitter bio-social__zmdi"></i>
                    </a>
                    <a target="_blank" href="https://instagram.com/ephraimaluebhosele_edha" rel="noopener noreferrer">
                      <i className="zmdi zmdi-instagram bio-social__zmdi"></i>
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/ephraim-aluebhosele-b4a99310a" rel="noopener noreferrer">
                      <i className="zmdi zmdi-linkedin bio-social__zmdi"></i>
                    </a>
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
                    To adequately represent and empower my constituency and 
                    support the state in development planning, conflict resolution, 
                    security, peacemaking and peacebuilding.
                    </p>
                  </div>
                </div>

                <div className="bio-vision">
                  <div className="bio-vision__head">
                    <h3>VISION</h3>
                  </div>
                  <div className="bio-vision__content">
                    <p>
                    Taking Igueben Higher, Joining in Transforming Edo State and NIGERIA
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
              {portfolios}
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
            <div onClick={this.openVideoModal} className="play-btn">
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
                  name="contact"
                  method="post"
                  action="/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  <p hidden>
                    <label htmlFor="bot-field">Don’t fill this out:{" "}</label>
                    <input name="bot-field" onChange={this.handleChange} />
                  </p>
                
                  <label htmlFor="name">What's your name?</label>
                  <input type="text" name="name" onChange={this.handleChange} />

                  <label htmlFor="email">What's your email address?</label>
                  <input type="text" name="email" onChange={this.handleChange} />

                  <label htmlFor="message">Type your message.</label>
                  <input type="text" name="message"onChange={this.handleChange} />

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
                  <i className="zmdi zmdi-email contact__zmdi"></i>{' '}
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

  return (
    [dom]
  );
  }
};

export default IndexPage;
