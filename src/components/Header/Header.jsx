import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className='header'>
        <div className='container d-flex'>
          <div className='logo'>
            {/* Add your logo here */}
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
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
    </div>
  );
}

export default Header;
