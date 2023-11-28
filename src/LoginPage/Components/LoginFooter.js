import React from 'react';
import '../../LoginPage/Styles/Login.css'; 

const LoginFooter = () => {
  return (
    <div className="bottom">
      <div className="bottom-width">
        Questions? Call Contact us.
        <div>
          <ul className="bottom-flex">
            <li className="list-bottom">
              <a href="#" className="link-bottom">
                FAQ
              </a>
            </li>
            <li className="list-bottom">
              <a href="#" className="link-bottom">
                Help Center
              </a>
            </li>
            <li className="list-bottom">
              <a href="#" className="link-bottom">
                Terms of Use
              </a>
            </li>
            <li className="list-bottom">
              <a href="#" className="link-bottom">
                Privacy
              </a>
            </li>
            <li className="list-bottom">
              <a href="#" className="link-bottom">
                Cookie Preferences
              </a>
            </li>
            <li className="list-bottom">
              <a href="#" className="link-bottom">
                Corporate information
              </a>
            </li>
          </ul>
        </div>
        <br/>
        <div className="dropdown__container_login">
          <i className="fas fa-globe"></i>
          <select
            name="languages"
            id="languagesSelect"
            className="language__drop__down"
          >
            <option value="english" selected>English</option>
            <option value="Arabic">العربية</option>
          </select>
        </div>
      </div>
      </div>
  );
}

export default LoginFooter;
