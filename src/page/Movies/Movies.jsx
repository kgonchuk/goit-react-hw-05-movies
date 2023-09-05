import { getMovieByWord } from '../../services/API';
import Loader from '../../components/Loader/Loader';
import MoviesList from 'page/MoviesList/MoviesList';
import Form from '../../components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { Notify } from 'notiflix';
import toast, { Toaster } from 'react-hot-toast';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) fetchMovieByWord();
    async function fetchMovieByWord() {
      setIsLoading(true);
      try {
        const responseMovie = await getMovieByWord(query);
        if (responseMovie.length === 0) {
          toast.error('Sorry, there are no movies matching your search query.');
        }
        setSearchFilms(responseMovie);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [query]);
  const updateQueryString = searchQuery => {
    if (searchQuery === query) {
      toast.error('Sorry, there are no movies matching your search query.');

      return;
    }
    setSearchParams({ query: searchQuery });
  };
  return (
    <main>
      <Toaster />
      {error && toast.error('Sorry, something went wrong. Pleae, try again')}

      <Form value={query} onSubmit={updateQueryString} />
      {isLoading && <Loader />}

      {searchFilms && <MoviesList films={searchFilms} />}
    </main>
  );
};
export default Movies;
