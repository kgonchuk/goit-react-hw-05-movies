import { List, Card } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(film => (
        <Card key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </Link>
        </Card>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesList;
