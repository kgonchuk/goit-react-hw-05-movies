import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '38060997-efaa6414bf9eafc84e286c70f';

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  //   return response.data.results;
  console.log(response.data);
};

export const getMovieByWord = async keyword => {
  const response = await axios.get(
    `search/movie/include_adult=false&language=en-US&page=1&query=${keyword}`
  );
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/movie_id?language=en-US' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWYxYjFlNDYxNjQ2OWI5Y2ZkNTJmNTI3MDkyMGYwNSIsInN1YiI6IjY0YTgyNmRlOTU3ZTZkMDEzOWNmYzdiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o-PWBF1W3lnHwqbXga83eUrpRbwMWiCa6f1Yb9E6sJA' \
//      --header 'accept: application/json'

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWYxYjFlNDYxNjQ2OWI5Y2ZkNTJmNTI3MDkyMGYwNSIsInN1YiI6IjY0YTgyNmRlOTU3ZTZkMDEzOWNmYzdiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o-PWBF1W3lnHwqbXga83eUrpRbwMWiCa6f1Yb9E6sJA' \
//      --header 'accept: application/json'
