import React, {useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import { getMovieDetails } from '../../services/api';
import css from './MovieCard.module.css'



export const MovieCard = () => {
const {id} = useParams();
const [movie,setMovie] = useState({})
const [error,setError] = useState(null)

  async function getMovie(){
    try {
      const movieDetails = await getMovieDetails(id);
      setMovie(movieDetails)
    }catch (error){
      setError(error)
    }
  }

  useEffect(()=>{
    (async () => {
      await getMovie()
    })()
  },[])

  const {poster_path,title,genres=[],overview,vote_average=0} = movie;
  return (
    <>
      <h2 className={css.movieTitle}>{title}</h2>
      <div className={css.cardWrapper}>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}/>
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
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet/>
    </>
  );
};
