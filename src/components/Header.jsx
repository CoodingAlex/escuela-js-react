import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (

  <header className='header'>
    <img src={logo} alt='' className='header__img' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='user' />
        <p>perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesion</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
