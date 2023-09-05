import { useState, useEffect } from 'react';
import { getMovieRewiews } from '../../services/API';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movieReview = () => {
      setIsLoading(true);

      getMovieRewiews(movieId)
        .then(reviews => {
          setReviews(reviews);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    movieReview();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length > 0 && (
        <List>
          {reviews &&
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ))}
        </List>
      )}{' '}
      {reviews.length === 0 && (
        <div>Sorry, we don't have any reviews for this movie</div>
      )}
    </>
  );
};
export default Reviews;
