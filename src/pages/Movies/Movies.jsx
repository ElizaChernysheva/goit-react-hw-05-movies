import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchMovies } from '../../services/api';
import Loader from '../../components/Loader/Loader';
import css from './Movies.module.css';
import MovieItem from '../../components/MovieItem/MovieItem';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const handleOnSubmit = useCallback(
    (querySearch) => {
      setSearchParams({ query: querySearch });
      // eslint-disable-next-line
    }, [searchQuery],
  );

  async function getMovies() {
    setLoading(true);
    try {
      const movies = await searchMovies(searchQuery);
      setMovies(movies);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      if (!searchQuery) {
        return;
      }
      await getMovies();
    })();
    // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <div>
      <SearchForm onSubmit={handleOnSubmit} />
      <main>
        {isLoading && <Loader />}
        {error ?
          <p className={css.moviesError}>Something went wrong...Try again</p> :
          <ul className={css.moviesList}>
            {movies.map(({ id, title, poster_path }) => (
              <MovieItem key={id} id={id} title={title} state={{ from: location }} poster_path={poster_path} />
            ))}
          </ul>}
      </main>
    </div>
  );
};


export default Movies;
