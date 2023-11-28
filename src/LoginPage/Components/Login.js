import React, { useState } from 'react';
import '../../LoginPage/Styles/Login.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const [inputTouched, setInputTouched] = useState({
    email: false,
    password: false,
  });

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
  };

  const inputOnBlur = (ev) => {
    const { name, value } = ev.target;

    setInputTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    if (name === 'email') {
      const warningEmail = document.getElementById('warningEmail');
      const inputEmail = document.getElementById('inputEmail');

      if (!validateEmail(value) && !validatePhone(value)) {
        warningEmail.style.display = 'block';
        inputEmail.style.borderBottom = '2px solid #e87c03';
      } else {
        warningEmail.style.display = 'none';
        inputEmail.style.borderBottom = 'none';
      }
    }

    if (name === 'password') {
      const warningPassword = document.getElementById('warningPassword');
      const inputPassword = document.getElementById('inputPassword');

      if (!(value.length >= 4 && value.length <= 60)) {
        warningPassword.style.display = 'block';
        inputPassword.style.borderBottom = '2px solid #e87c03';
      } else {
        warningPassword.style.display = 'none';
        inputPassword.style.borderBottom = 'none';
      }
    }
  };

  const inputOnFocus = (ev) => {
    const { name } = ev.target;

    setInputTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSignIn = () => {
    // Handle sign-in logic
  };

  return (
    
    <div className="upper">
         
      <div className="logo">
        <a href="#">
          <img  src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo" className="img-logo" />
        </a>
      </div>
      <div className="login-div">
        <form className="login">
          <h1>Sign In</h1>
          <div className="input-text">
            <input
              type="text"
              id="inputEmail"
              name="email"
              placeholder="Email or phone number"
              onFocus={inputOnFocus}
              onBlur={inputOnBlur}
            />
            
            <div className="warning-input" id="warningEmail">
              Please enter a valid email or phone number.
            </div>
          </div>

          <div className="input-text">
            <input
              type="password"
              id="inputPassword"
              name="password"
              placeholder="Password"
              onFocus={inputOnFocus}
              onBlur={inputOnBlur}
            />
            <div className="warning-input" id="warningPassword">
              Your password must contain between 4 and 60 characters.
            </div>
          </div>

          <div>
            <Link to="/movies">
            <button className="signin-button" onClick={handleSignIn}>
              Sign In
            </button>
            </Link>
          </div>
          <div className="remember-flex">
            <div>
              <input type="checkbox" />
              <label className="color_text">Remember me</label>
            </div>
            <div className="help">
              <a className="color_text" href="#">
                Need help?
              </a>
            </div>
          </div>
          <div><br/></div>
          <div className="new-members">
            New to Netflix? <a href="#" className="signup-link">Sign up now</a>.
          </div>
          <div className="protection color_link help">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
            <a href="#">Learn more.</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
