import { Route, Routes } from "react-router-dom";
import { Header } from './Header/Header';
import { Home } from '../pages/Home/Home'
import {Movies} from '../pages/Movies/Movies'
import {MovieCard} from '../pages/MovieCard/MovieCard'
import {Cast} from './Cast/Cast';
import {Reviews} from './Reviews/Reviews';

export const App = () => {

  return (
    <>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='movies' element={<Movies/>}/>
          <Route path="movies/:id" element={<MovieCard/>}>
            <Route path='cast' element={<Cast/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
        </Routes>
      </div>
    </>

  );
};
