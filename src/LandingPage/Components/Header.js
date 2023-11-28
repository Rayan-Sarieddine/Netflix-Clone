
import React from 'react';
import '../../LandingPage/Styles/Landing.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
  
      <header>
        <nav className="navbar">
          <div className="navbar__brand">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="logo"
              className="brand__logo"
            />
          </div>
  
          <div className="navbar__nav__items">
            <div className="nav__item">
              <div className='item_select'>
                <i className="fas fa-globe"></i>
                <select
                  name="languages"
                  id="languagesSelect"
                  className="language__drop__down"
                >
                       <option value="arabic"  style={{ color: 'grey' }}>
                    العربية
                  </option>
                  <option value="english" selected style={{ color: 'grey' }}>
                    English
                  </option>
               
                </select>
            </div>
         </div>
  
         <div className="nav__item">
            <Link to="/login" className="signin__button">
              Sign in
            </Link>
    </div>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;