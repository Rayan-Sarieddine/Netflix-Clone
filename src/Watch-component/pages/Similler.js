import React, { useState, useEffect } from 'react';
import '../styles/Watch.css';
import { useParams } from 'react-router-dom';

function Similler() {
    const { id } = useParams();
    const movieId = parseInt(id, 10);

  const [similler, setSimiller] = useState(null);

  useEffect(() => {
    const similerFetch = async () => {
      try {
        const response = await fetch(
         `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1&api_key=13956b67d71217236ba5306171319b71`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setSimiller(data);

        // Log the response to the console
        console.log('API Response:', data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    similerFetch();
  }, [movieId]);

  const base_url = 'https://images.tmdb.org/t/p/original/';

  return (
    <div>
      <section className='card-watch'>
        <div className='details-header'>
          <h2>More Like This</h2>
        </div>
        <div className='container-cards'>
          <div className='cards-details-container'>
            { similler &&
              similler.results &&
              similler.results.slice(0,18).map((movie) => (
            <a key={movie.id} className="title-link">
                  <img
                    className="title-link-img"
                    src={`${base_url}${movie.backdrop_path}`}
                    alt={movie.title}
                    loading="lazy"
                  />
                </a>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Similler;
