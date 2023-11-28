import React from "react";
import '../../LandingPage/Styles/Landing.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer__q">
        <h4>Questions? Contact us.</h4>
      </div>
      <div className="footer_main">
        <div className="footer-column">
          <div className="footer__row">
            <div className="column__1">
              <a>FAQ</a>
              <a>Investor Relations</a>
              <a>Privacy</a>
              <a>Speed Test</a>
            </div>
            <div className="column__1">
              <a>Help Center</a>
              <br/>
              <a>Jobs</a>
              <a>Cookie Preferences</a>
              <a>Legal Notices</a>
            </div>
            <div className="column__1">
              <a>Account</a>
              <a>Ways to Watch</a>
              <br/>
              <a>Corporate Information</a>
              <a>Only on Netflix</a>
            </div>
            <div className="column__1">
              <a>Media Center</a>
              <a>Terms of Use</a>
              <a>Contact Us</a>
            </div>
          </div>
        </div>
        
      </div>

      <div className="footer__row">
        <div className="dropdown__container">
          <i className="fas fa-globe"></i>
          <select
            name="languages"
            id="languagesSelect"
            className="language__drop__down"
          >
            <option value="english" selected>
              English
            </option>
            <option value="Arabic">العربية</option>
          </select>
        </div>
      </div>
      <div className="footer__row">
        <a>Netflix Lebanon</a>
      </div>
    </footer>
  );
};

export default Footer;
