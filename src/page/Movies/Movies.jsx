import { useState } from 'react';
import getMovieByWord from '../../page/Movies/Movies';
import Form from '../../components/SearchForm/SearchForm';
import MoviesList from 'page/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noMovies, setNoMovies] = useState(false);

  const searchMovies = queryMovie => {
    setIsLoading(true);

    getMovieByWord(queryMovie)
      .then(searchResult => {
        setSearchFilms(searchResult);
        setNoMovies(searchResult.length === 0);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {isLoading && <Loader />}
      {noMovies && (
        <p>Sorry,no movies were found for your request. Please, try again</p>
      )}
      {searchFilms && <MoviesList films={searchMovies} />}
    </main>
  );
};
export default Movies;
