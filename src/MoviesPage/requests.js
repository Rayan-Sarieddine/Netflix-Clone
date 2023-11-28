const requests = {
  Action: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=28&language=`,
  Adventure: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=12&language=`,
  Animation: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=16&language=`,
  Comedy: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=35&language=`,
  Crime: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=80&language=`,
  Documentary: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=99&language=`,
  Drama: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=18&language=`,
  Family: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=10751&language=`,
  Fantasy: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=14&language=`,
  History: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=36&language=`,
  Horror: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=27&language=`,
  Music: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=10402&language=`,
  Mystery: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=9648&language=`,
  Romance: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=10749&language=`,
  ScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=878&language=`,
  TVMovie: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=10770&language=`,
  Thriller: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=53&language=`,
  War: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=10752&language=`,
  Western: `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=37&language=`,
};

export default requests;
// fetch(
//   "https://api.themoviedb.org/3/genre/movie/list?api_key=e0c6f6c86c1a360f089de898487ec169&language=en"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const genres = data.genres;

//     // Fetch movies for each genre
//     genres.forEach((genre) => {
//       const genreId = genre.id;

//       fetch(
//         `https://api.themoviedb.org/3/discover/movie?api_key=e0c6f6c86c1a360f089de898487ec169&with_genres=${genreId}&language=en`
//       )
//         .then((response) => response.json())
//         .then((moviesData) => {
//           const movies = moviesData.results;
//           // Process movies for this genre (e.g., display, store in state, etc.)
//           console.log(`Movies for genre ${genre.name}:`, movies);
//         })
//         .catch((error) => {
//           console.log("Error fetching movies:", error);
//         });
//     });
//   })
//   .catch((error) => {
//     console.log("Error fetching genre list:", error);
//   });