import React,{useEffect,useState} from 'react';
import {getMovieCredits} from '../../services/api'
import { NavLink, useParams } from 'react-router-dom';
import css from './Cast.module.css';
import img from '../../assets/imgs/img.png'


export const Cast = () => {
  const {id} = useParams();
  const [movieCast,setMovieCast] = useState([])
  const [error,setError] = useState(null)


  async function getMovieCast(){
    try {
      const movieCast = await getMovieCredits(id)
      setMovieCast(movieCast);
    }catch (error){
      setError(error);
    }

  }

  useEffect(()=>{
    (async ()=>{
     await getMovieCast();
    })()
  },[])

  return (
    <div>
      {error ?
        <p className={css.castError}>Something went wrong...Try again</p> :
        <ul className={css.castList}>
          {movieCast.map(({id,character,profile_path,original_name}) =>(
            <li key={id} className={css.castItem}>
                <img className={css.castImg} src={profile_path ?`https://image.tmdb.org/t/p/w200/${profile_path}`: img } alt={original_name}/>
              <p className={css.castName}>Character : <span>{character}</span></p>
                <p className={css.castName}>Original Name : <span>{original_name}</span></p>
            </li>
          ))}
        </ul>}
    </div>
  );
};
