import React from 'react';
import css from './MovieItem.module.css'
import { NavLink } from 'react-router-dom';

export const MovieItem = ({id,title,poster_path}) => {
  return (

    <div>
      <li className={css.movieItem}>
        <NavLink className={css.movieLink} to={`/movies/${id}`}>
          <img className={css.movieImg} src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}/>
          <p className={css.movieTitle}>{title}</p>
        </NavLink>
      </li>
    </div>
  );
};

