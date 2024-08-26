import React, { useState } from 'react';
import './Header.css';
import logo from '../Assets/logo no background.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <div className='container d-flex'>
        <div className='logo'>
          <img src={logo}/>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className='close-icon' onClick={toggleMenu}>
            <i className='bx bx-x'></i>
          </div>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Gallery</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Contact Us</a></li>
          </ul>
        </div>
        <div className='hamburger' onClick={toggleMenu}>
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
