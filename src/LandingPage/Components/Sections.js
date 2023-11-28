import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '@fontsource/poppins'; // Import Poppins font
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome styles
import '../../LandingPage/Styles/Landing.css'

const Sections = () => {
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

      <div className="sections-container">
        {/* Section One */}
        <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">Enjoy on your TV</h3>
        <h5 className="feature__sub__title">
          Watch on smart TVs, PlayStation, Xbox, Chromecast,
           Apple TV, Blu-ray players and more.
        </h5>
      </div>
      <div className="feature__image__container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="Feature image"
          className="feature__image"
        />
        <div className="feature__backgroud__video__container">
          <video
            autoPlay
            loop
            muted
            className="feature__backgroud__video"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>

        {/* Section Two */}
        <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">
          Download your shows to watch offline
        </h3>
        <h5 className="feature__sub__title">
          Save your favorites easily and always have something to watch
        </h5>
      </div>
      <div className="feature__image__container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt="Feature image"
          className="feature__image"
        />
        <div className="feature__2__poster__container">
          <div className="poster__container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="poster"
              className="poster"
            />
          </div>
          <div className="poster__details">
            <h4>Stranger Things</h4>
            <h6>Downloading...</h6>
          </div>
          <div className="download__gif__container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt="downloading gif"
              className="gif"
            />
          </div>
        </div>
      </div>
    </div>

        {/* Section Three */}
        <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">Watch everywhere</h3>
        <h5 className="feature__sub__title">
          Stream unlimited movies and TV shows on your phone, 
           tablet, laptop, and TV.
        </h5>
      </div>
      <div className="feature__image__container feature__3__image__container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          alt="Feature image"
          className="feature__image feature__3__image"
        />
        <div
          className="feature__backgroud__video__container feature__3__backgroud__video__container"
        >
          <video
            autoPlay
            loop
            muted
            className="feature__backgroud__video feature__3__backgroud__video"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>

        {/* Section Four */}
        <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">Create profiles for Kids</h3>
        <h5 className="feature__sub__title">
        Send kids on adventures with their favorite characters in 
        a space made just for them—free with your membership.
        </h5>
      </div>
      <div className="feature__image__container">
        <img
          src="https://occ-0-4023-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
          alt="Feature image"
          className="feature__image"
        />
      </div>
    </div>
      </div>
    </HelmetProvider>
  );
};

export default Sections;
