import { List, Card } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';
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

export default MoviesList;
