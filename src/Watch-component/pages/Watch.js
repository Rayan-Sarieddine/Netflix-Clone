import React, { useState, useEffect } from 'react';
import '../styles/Watch.css';
import logo from '../assets/netlog.png'
import { useParams } from 'react-router-dom';

function Watch() {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response =
          await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=13956b67d71217236ba5306171319b71`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setMovie(data);
          console.log('API Response:', data);
        } catch (error) {
          console.error('Error fetching movie data:', error);
        }
      };
  
      fetchData();
    }, [movieId]);
  
    if (!movie) {
     
      return <div>Loading...</div>;
    }


 const base_url = 'https://images.tmdb.org/t/p/original/';
  return (
    <div className='Watch'>
  <section className="watch-header">
  <div className='background-watch' style={{ backgroundImage: `url(${base_url}${movie.backdrop_path})` }}>
   
      <div className="container-watch">   
        <div  className='info-text-watch'>
        <div className='scarimg'>
        <img src={`${base_url}${movie.poster_path}`}  alt={movie.title}/>
        </div>
        <div className='scartext-watch'>
        <h1 className='title-title-watch'><b>{movie.title}</b></h1>
          <div className="title-info-watch" >
            <span className="title-info-watch-item item-year">{movie.release_date.slice(0,4)}</span>
            <span role="presentation" className="info-spacer"> | </span>
            <span className="title-info-watch-item item-maturity">
              <span className="maturity-rating">
              <span className="maturity-number">{movie.adult === false ? "18+" : "13+"}
              </span>
              </span>
              </span>
              <span role="presentation" className="info-spacer"> | </span>
              <span className="title-info-watch-item item-runtime" >
                <span className="duration-watch">{movie.runtime} min</span>
                </span>
                <span role="presentation" className="info-spacer"> | </span>
                <a className="title-info-watch-item item-genre" href={movie.homepage}>{movie.genres[0].name}</a>
          </div>
          <div className='title-desc-watch'>
          <div className='title-desc-watch-1'>
            <span>
            {movie.overview}
            </span>
            </div>
            <div className='title-desc-watch-2'>
            <span className='desc-title'>Starring:</span>
            <span className='desc-text'>Michelle Pfeiffer</span>
            </div>
          </div>
        </div>
      </div>


      </div>
    
      </div>
      <div className='net-watch'>
          <img src={logo} alt='netlog'/>
          <div className='net-watch-wrapper'>
            <div className='net-watch-text'>Watch all you want.</div>
            <div className='net-watch-btn'>
              <button className="net-watch-btn-red" type="submit" role="link">JOIN NOW</button>
            </div>
          </div>
      </div>  

  </section>






  
  </div>
  );
}

export default Watch;
