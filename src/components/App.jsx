import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import lazy from 'react';
import Home from '../page/Home/Home';
import Cast from '../components/Cast/Cast';
import MovieDetails from '../page/MovieDetails/MovieDetails';
import Reviews from '../components/Reviews/Reviews';
import Movies from '../page/Movies/Movies';
// const Home = lazy(() => import('../page/Home/Home'));
// const Cast = lazy(() => import('../components/Cast/Cast'));
// const MovieDetails = lazy(() => import('../components/Reviews/Reviews'));
// const Reviews = lazy(() => import('../components/Reviews/Reviews'));
// const Movies = lazy(() => import('../page/Movies/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
