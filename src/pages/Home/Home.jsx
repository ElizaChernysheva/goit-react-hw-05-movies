import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/api'
import css from './Home.module.css'
import Loader from '../../components/Loader/Loader';
import { MovieItem } from '../../components/MovieItem/MovieItem';

const Home = () => {
  const [trendingMovies,setTrendingMovies] = useState([])
  const [error,setError] = useState(null)
  const [isLoading,setLoading] = useState(false);

  useEffect(()=>{
    (async ()=>{
      setLoading(true)
      try{
        const movies = await getTrendingMovies();
        setTrendingMovies(movies)
      }catch (error){
        setError(error)
      }finally {
        setLoading(false)
      }
    })()

  },[])


  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && <Loader/>}
      {error ?
        <p className={css.homeError}>Something went wrong...Try again</p> :
        <ul className={css.homeList}>
        {trendingMovies.map(({id,title,poster_path}) =>(
          <MovieItem key={id} id={id} title={title} poster_path={poster_path}/>
        ))}
      </ul>}
    </main>
  );
};

export default Home;
