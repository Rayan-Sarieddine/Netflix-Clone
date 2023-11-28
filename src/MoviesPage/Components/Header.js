import React from "react";
import "../Styles/Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={require("../Images/logo.png")} alt="netflix logo"></img>
      </div>
      <div className="header-right">
        <p>unlimited tv shows & movies</p>
        <button className="join-button">join now</button>
        <button className="signIn-button">sign in</button>
      </div>
    </div>
  );
}

export default Header;
