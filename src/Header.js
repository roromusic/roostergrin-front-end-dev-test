import React from 'react';
import logo from './img/igniter-logo-white.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='header-logo'>
        <img src={logo} alt='logo' />
      </div>
    </header>
  );
};

export default Header;