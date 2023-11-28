import React from "react";
import "../Styles/More.css";
function More() {
  return (
    <div className="more">
      <h3>There’s even more to watch.</h3>
      <p>
        Netflix has an extensive library of feature films, documentaries, TV
        shows, anime, award-winning Netflix originals, and more. Watch as much
        as you want, anytime you want.
      </p>
      <button className="more-join-button">join now</button>
      <a href="https://www.netflix.com/tudum">
        Read about Netflix TV shows and movies and watch bonus videos on
        Tudum.com.
      </a>
    </div>
  );
}

export default More;
