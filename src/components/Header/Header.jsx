import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';
import film from '../../assets/imgs/film(1).png';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <NavLink className={css.nav_link} to='/'>
          <img src={film} width='50' height='50' alt='logo' />
        </NavLink>

        <nav className={css.nav}>
          <NavLink className={css.nav_link} to='/'>Home</NavLink>
          <NavLink className={css.nav_link} to='/movies'>Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
