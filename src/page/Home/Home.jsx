import MoviesList from '../MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import { getTrendingMovies } from '../../services/API';

import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrending = () => {
      setIsLoading(true);
      getTrendingMovies()
        .then(trendingFilms => {
          setMovies(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    getTrending();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList films={movies} />

      {isLoading && <Loader />}
    </main>
  );
};
export default Home;
