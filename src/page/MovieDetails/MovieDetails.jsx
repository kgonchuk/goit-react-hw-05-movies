import { getMovieDetails } from '../../services/API';
import Loader from '../../components/Loader/Loader';
import { getPoster } from '../../services/plaseHolder';

import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
  Container,
  List,
  ListInfo,
  LinkInfo,
  GoBackLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();

  const goBackHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const movieDetails = () => {
      setIsLoading(true);
      getMovieDetails(movieId)
        .then(detailMovie => {
          setMovieInfo(detailMovie);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    movieDetails();
  }, [movieId]);
  if (!movieId) return;
  const {
    title,
    overview,
    poster_path,
    vote_average,
    release_date,
    original_title,
    genres,
  } = movieInfo || {};

  return (
    <>
      <GoBackLink to={goBackHref.current}>Go Back</GoBackLink>

      {isLoading && <Loader />}
      {movieInfo && (
        <Container>
          <img src={getPoster(poster_path)} width={250} alt={original_title} />

          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score:{Math.round(vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <List>{genres?.map(({ name }) => name).join(', ')}</List>
          </div>
        </Container>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ListInfo>
          <li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </li>
        </ListInfo>
        <hr />
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetails;
