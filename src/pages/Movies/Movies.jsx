import React, { useState,useCallback,useEffect } from 'react';
import {SearchForm} from '../../components/SearchForm/SearchForm'
import { searchMovies } from '../../services/api';
import { Loader } from '../../components/Loader/Loader';
import css from './Movies.module.css';
import { MovieItem } from '../../components/MovieItem/MovieItem';

export const Movies = () => {
  const [input,setInput] = useState('');
  const [movies,setMovies] = useState([]);
  const [error,setError] = useState(null)
  const [isLoading,setLoading] = useState(false);


  const handleOnSubmit = useCallback(
    (value) => {
      setInput(value);
    },[]
  )

  async function getMovies(){
    const movies = await searchMovies(input);
    setMovies(movies)
  }

  useEffect(()=>{
    (async () => {
      if(!input){
        return;
      }
      await getMovies()
    })()
  },[input])

  return (
    <div>
    <SearchForm onSubmit={handleOnSubmit}/>
      <main>
        {isLoading && <Loader/>}
        {error ?
          <p className={css.moviesError}>Something went wrong...Try again</p> :
          <ul className={css.moviesList}>
            {movies.map(({id,title,poster_path}) =>(
              <MovieItem key={id} id={id} title={title} poster_path={poster_path}/>
            ))}
          </ul>}
      </main>
    </div>
  );
};

