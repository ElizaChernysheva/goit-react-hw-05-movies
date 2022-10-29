import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css'
import film from '../../assets/imgs/film(1).png'

export const Header = () =>{
  return(
    <>
      <header className={css.header}>
        <img src={film} width='50' height='50'/>
        <nav className={css.nav}>
          <NavLink className={css.nav_link} to="/">Home</NavLink>
          <NavLink className={css.nav_link} to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet/>
    </>
  )
}
