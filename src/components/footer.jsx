import React from "react"

const Footer = () => (
  <footer className="main-footer">
    <div className="container">
      <div className="footer-edge"></div>
      <div className="row">
        <div>
          <a href="index.html">
            <h3 className="main-header__title">The Hon. Ephraim</h3>
          </a>
          <div className="footer-social">
            <i className="zmdi zmdi-facebook footer-social__zmdi"></i>
            <i className="zmdi zmdi-twitter footer-social__zmdi"></i>
            <i className="zmdi zmdi-instagram footer-social__zmdi"></i>
            <i className="zmdi zmdi-linkedin footer-social__zmdi"></i>
          </div>
        </div>

        <div className="footer-form">
          <p>Get Updates From Hon. Ephraim</p>
          <form className="footer-form-group" action="POST" data-netlify="true">
            <input
              className="footer-form__input"
              type="text"
              placeholder="Email Address"
              name="subscriber_email"
            />
            <input className="footer-form__btn" type="submit" value="Go" />
          </form>
          <p className="footer-form__designer">
            designed by <span className="bold">GIVITEC LTD</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
