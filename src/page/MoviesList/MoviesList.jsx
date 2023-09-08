import { List, Card, Title } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';
import { getPoster } from '../../services/plaseHolder';
const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(film => (
        <Card key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            <img
              src={getPoster(film.poster_path)}
              width={250}
              alt={film.original_title}
            />
            <Title>{film.title}</Title>
          </Link>
        </Card>
      ))}
    </List>
  );
};

export default MoviesList;
