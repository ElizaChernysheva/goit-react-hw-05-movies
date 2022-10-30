import React from 'react';
import css from './MovieItem.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieItem = ({ id, title, poster_path, state }) => {
  return (
    <div>
      <li className={css.movieItem}>
        <NavLink className={css.movieLink} to={`/movies/${id}`} state={state}>
          <img className={css.movieImg} src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
          <p className={css.movieTitle}>{title}</p>
        </NavLink>
      </li>
    </div>
  );
};


MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  state: PropTypes.object,
};


export default MovieItem;
