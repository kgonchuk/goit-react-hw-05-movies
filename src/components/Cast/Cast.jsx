import { useEffect, useState } from 'react';
import { getMovieActor } from '../../services/API';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { List, Text } from './Cast.styled';
import { getPoster } from '../../services/plaseHolder';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movieActor = () => {
      setIsLoading(true);

      getMovieActor(movieId)
        .then(actors => {
          setActor(actors);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    movieActor();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {actors &&
        actors.map(({ id, profile_path, original_name, name, character }) => (
          <List key={id}>
            <img
              src={getPoster(profile_path)}
              width={250}
              alt={original_name}
            />

            <Text>{name}</Text>
            <Text>Character:{character}</Text>
          </List>
        ))}
    </div>
  );
};
export default Cast;
