import React,{useEffect,useState} from 'react';
import { getMovieReviews } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';


export const Reviews = () => {
  const {id} = useParams();
  const [movieReviews,setMovieReviews] = useState([])
  const [error,setError] = useState(null)

  async function getReviews(){
    try {
      const movieReviews = await getMovieReviews(id)
      setMovieReviews(movieReviews);
    }catch (error){
      setError(error);
    }

  }

  useEffect(()=>{
    (async ()=>{
      await getReviews();
    })()
  },[])

  return (
    <div>
      {error ?
        <p className={css.reviewsError}>Something went wrong...Try again</p> :
        <ul className={css.reviewsList}>
          {movieReviews.length > 0 ? movieReviews.map(({id,author,content,updated_at}) =>(
            <li className={css.reviewsItem} key={id} >
              <p className={css.reviewsInfo}>Author: <span>{author}</span></p>
              <p className={css.reviewsInfo}>Review: <span>{content}</span></p>
           </li>
          )) :
            <p className={css.reviewsEmpty}>Sorry, there are no reviews...</p>
          }
        </ul>}
    </div>
  );
};
