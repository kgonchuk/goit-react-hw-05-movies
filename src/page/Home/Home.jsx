import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/API';
import MoviesList from '../MoviesList/MoviesList';
import { useLocation } from 'react-router';

const Home = () => {
  const location = useLocation;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.results), []);
  });
  return <MoviesList movies={movies} location={location} />;
};
export default Home;
