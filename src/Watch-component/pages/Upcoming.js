import React, { useState, useEffect } from 'react';
import '../styles/Watch.css';

function Upcoming() {
  const [upcoming, setupcoming] = useState(null);

  useEffect(() => {
    const upcomingFetch = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=13956b67d71217236ba5306171319b71'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setupcoming(data);

        
        console.log('API Response:', data);
      } catch (error) {
        console.error('Error fetching text data:', error);
      }
    };

    upcomingFetch();
  }, []);

  return (
    <section className='comingsoon-watch'>
      <div className='details-header'>
        <h2>Coming Soon</h2>
      </div>
    
      <div className="coming-soon-container">
        { upcoming &&
          upcoming.results &&
          upcoming.results.slice(0,6).map((movie) => (
            <div key={movie.id} className="coming-soon-link">
              <a href={`/lb-en/title/${movie.id}`}>
                <div className="coming-soon-title ">{movie.original_title}</div>
                <div className="coming-soon-synopsis">{movie.overview}</div>
              </a>
            </div>
          ))}
      </div>
    </section>
    
  );
}

export default Upcoming;
