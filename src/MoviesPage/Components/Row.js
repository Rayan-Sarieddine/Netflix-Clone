import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../Styles/Row.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function Row({ title, fetchURL, blurred, lang }) {
  const [movies, setMovies] = useState([]); //setting movie state to keep updating it
  useEffect(() => {
    //once the row is fully loaded run this
    async function fetchData() {
      fetch(`${fetchURL}`)
        .then((res) => {
          return res.json();
        })
        .then((value) => {
          setMovies(value.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, [fetchURL, lang]); //will run every time movies or lang change
  const base_URL = "https://images.tmdb.org/t/p/original/"; //for getting images
  return (
    <>
      <h2
        className={
          blurred === "1" || blurred === "2" ? "row-title blur" : "row-title"
        }
      >
        {title}
      </h2>
      <Swiper
        slidesPerView={4}
        navigation={true}
        modules={[Navigation]}
        className={
          blurred === "1" || blurred === "2" ? "mySwiper blur" : "mySwiper"
        }
      >
        {movies.map((movie) => (
         <SwiperSlide  key={movie.id}>
          <Link to={`/watch/${movie.id}`}>
            <div>
              <img
                src={`${base_URL}${movie.backdrop_path}`}
                alt={movie.name}
                className={blurred === "2" ? "blurred-img" : "row-img"}
              />
              <p className={blurred === "2" ? "hidden" : "img-title"}>
                {movie.title}
              </p>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Row;
