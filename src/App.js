
import "./App.css";
import React from 'react';
import Header from './LandingPage/Components/Header.js';
import Hero from './LandingPage/Components/Hero.js';
import Sections from './LandingPage/Components/Sections.js';
import FAQSection from './LandingPage/Components/FAQSection.js';
import Footer from './LandingPage/Components/Footer.js';
import Login from './LoginPage/Components/Login.js';
import LoginFooter from './LoginPage/Components/LoginFooter.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from "./MoviesPage/MoviesPage.js";
import WatchPage from "./Watch-component/WatchPage.js";

function App() {
  return( <div className="App">
    <React.Fragment>

      <Router>
        <Routes>   
          <Route path="/" element={
            <React.Fragment>
              <Header/>
              <Hero/>
               <Sections/>
               <FAQSection/>
               <Footer/>
            </React.Fragment>
          }/>
          
          <Route path="/login" element={
            <React.Fragment>
              <Login/>
              <LoginFooter/>
            </React.Fragment>
          }/>
          <Route path="/watch/:id" element={
            <React.Fragment>
             <WatchPage/>
            </React.Fragment>
          }/>
            <Route path="/movies" element={
            <React.Fragment>
             <MoviesPage/>
            </React.Fragment>
          }/>
          </Routes>
          </Router>
    </React.Fragment>
    
  </div>);
}
export default App;
