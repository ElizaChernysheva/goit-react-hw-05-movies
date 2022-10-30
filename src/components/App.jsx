import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Header = lazy(() => import("./Header/Header"));
const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieCard = lazy(() => import("pages/MovieCard/MovieCard"));
const Cast = lazy(() => import("pages/Cast/Cast"));
const Reviews = lazy(() => import("pages/Reviews/Reviews"));

export const App = () => {

  return (
    <div>
      <Suspense fallback=''>
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
      </Suspense>
    </div>
  );
};
