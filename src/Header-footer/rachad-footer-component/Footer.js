function Footer() {
  return (
    <div className="R-footer-container">
      <div className = "content">
        <div className="R-question">
          Questions? Contact us.
        </div>
        <div className="R-columns-container">
          <div className="R-col1">
            <ul className="R-ul-col1">
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
          </div>
          <div className="R-col2">
            <ul className="R-ul-col2">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className="R-col3">
            <ul className="R-ul-col3">
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li><p className='hi'>Only on Netflix</p></li>
            </ul>
          </div>
          
          <div className="R-col4">
            <ul className="R-ul-col4">
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="R-language-selections">
          <i className="fas fa-globe"></i>
          <select className="R-l-selections">
            <option value="R-english">English</option>
            <option value="R-arabic">العربية</option>
          </select>
        </div>
        <div className="R-last-part">
          Netflix Lebanon
        </div>
      </div>
    </div>
  );
}
export default Footer;
