// Hero.js
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '@fontsource/poppins'; // Import Poppins font
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome styles
import '../../LandingPage/Styles/Landing.css'
import React from 'react';


const Hero = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
      </Helmet>

    <section className="hero">
      <div className="hero__bg__image__container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/504c814b-57c3-43af-ab7b-4def88fd3a89/LB-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="BG hero image"
          className="hero__bg__image"
        />
      </div>
      <div className="hero__bg__overlay"></div>

      <div className="hero__card">
        <h1 className="hero__title">
          Unlimited Movies TV, Shows and more
        </h1>
        <p className="hero__subtitle">Watch anywhere. Cancel anytime.</p>
        <p className="hero__description">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="email__form__container">
          <div className="form__container">
            <input type="email" className="email__input" placeholder=" " />
            <label className="email__label">Email Address</label>
          </div>
          <button className="primary__button">
            Get Started <i className="fal fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
    </HelmetProvider>
  );
};

export default Hero;
