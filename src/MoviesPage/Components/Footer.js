import React, { useState } from "react";
import "../Styles/Footer.css";
function Select({ selectedValue, handleSelectChange }) {
  return (
    //select jsx
    <select
      class="language"
      value={selectedValue}
      onChange={handleSelectChange}
    >
      <option value="en">English</option>
      <option value="ar-SA">العربية</option>
    </select>
  );
}

function Footer({ lang, setLang }) {
  const [selectedValue, setSelectedValue] = useState("");
  //change state lang function
  const handleLangChange = (lang) => {
    setLang(lang);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    handleLangChange(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="footer">
      <a className="footer-main_link" href="https://netflix.com">
        Questions? Contact us.
      </a>
      <div className="footer-nav">
        <div className="footer-nav_column">
          <a href="https://netflix.com">FAQ</a>
          <a href="https://netflix.com">Investor Relations</a>
          <a href="https://netflix.com">Privacy</a>
          <a href="https://netflix.com">Speed Test</a>
          <Select
            selectedValue={selectedValue}
            handleSelectChange={handleSelectChange}
          />
        </div>
        <div className="footer-nav_column">
          <a href="https://netflix.com">Help Center</a>
          <a href="https://netflix.com">Jobs</a>
          <a href="https://netflix.com">Cookie Preferences</a>
          <a href="https://netflix.com">Legal Notices</a>
        </div>
        <div className="footer-nav_column">
          <a href="https://netflix.com">Account</a>
          <a href="https://netflix.com">Ways to Watch</a>
          <a href="https://netflix.com">Corporate Information</a>
          <a href="https://netflix.com">Only on Netflix</a>
        </div>
        <div className="footer-nav_column">
          <a href="https://netflix.com">Media Center</a>
          <a href="https://netflix.com">Terms of Use</a>
          <a href="https://netflix.com">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
