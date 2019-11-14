import React from "react"
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="main-footer">
    <div className="container">
      <div className="footer-edge"></div>
      <div className="row">
        <div>
          
          <h3 className="main-header__title"><Link to="/">The Hon. Ephraim</Link></h3>
          
          <div className="footer-social">
            <a target="_blank" href="https://web.facebook.com/ephraim.sele" rel="noopener noreferrer">
              <i className="zmdi zmdi-facebook footer-social__zmdi"></i>
            </a>
            <a target="_blank" href="https://twitter.com/hoiphrontistai" rel="noopener noreferrer">
              <i className="zmdi zmdi-twitter footer-social__zmdi"></i>
            </a>
            <a target="_blank" href="https://instagram.com/ephraimaluebhosele_edha" rel="noopener noreferrer">
              <i className="zmdi zmdi-instagram footer-social__zmdi"></i>
            </a>
            <a target="_blank" href="https://linkedin.com/in/ephraim-aluebhosele-b4a99310a" rel="noopener noreferrer">
              <i className="zmdi zmdi-linkedin footer-social__zmdi"></i>
            </a>
          </div>
        </div>

        <div className="footer-form">
          <p>Get Updates From Hon. Ephraim</p>
          <div className="footer-form-group">
            <input
              className="footer-form__input"
              type="text"
              placeholder="Email Address"
              name="subscriber_email"
            />
            <input className="footer-form__btn" type="submit" value="Go" />
          </div>
          <p className="footer-form__designer">
            designed by <span className="bold">GIVITEC LTD</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
