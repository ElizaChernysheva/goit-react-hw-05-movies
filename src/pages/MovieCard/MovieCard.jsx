import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import css from './MovieCard.module.css';

const MovieCard = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [, setError] = useState(null);
  const location = useLocation();
  const goBack = location?.state?.from ?? '/';

  async function getMovie() {
    try {
      const movieDetails = await getMovieDetails(id);
      setMovie(movieDetails);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    (async () => {
      await getMovie();
    })();
    // eslint-disable-next-line
  }, []);

  const { poster_path, title, genres = [], overview, vote_average = 0 } = movie;
  return (
    <>
      <NavLink className={css.cardBtnBack} to={goBack}>Go back</NavLink>
      <h2 className={css.movieTitle}>{title}</h2>
      <div className={css.cardWrapper}>
        <img className={css.cardImg} src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
        <div className={css.cardInfo}>
          <h3 className={css.cardTitle}>Overview </h3>
          <p className={css.cardOverview}>{overview}</p>
          <h3 className={css.cardTitle}>Genres </h3>
          {genres.length > 0 && (
            <p className={css.cardGenres}>
              {genres.map(({ name }) => name).join(', ')}
            </p>
          )}
          <p className={css.cardScore}>User score {vote_average.toFixed(2)}%</p>
          <h3 className={css.cardTitle}>Additional information</h3>
          <ul className={css.cardNav}>
            <li>
              <NavLink className={css.cardLink} to='cast'>Cast</NavLink>
            </li>
            <li>
              <NavLink className={css.cardLink} to='reviews'>Reviews</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};


export default MovieCard;
