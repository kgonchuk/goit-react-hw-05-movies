import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c9873e67c5e03bd61e79d852c2fd46a6';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
  // console.log(response.data);
};
export const getMovieByWord = async query => {
  const searchParams = new URLSearchParams({
    include_adult: false,
    language: 'en-US',
    page: 1,
    query: query,
    api_key: API_KEY,
  });

  const response = await axios.get(`${BASE_URL}search/movie?${searchParams}`);
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieActor = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const getMovieRewiews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};
