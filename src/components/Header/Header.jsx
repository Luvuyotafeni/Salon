import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <header className='header'>
        <div className='container d-flex'>
          <div className='logo '>

          </div>
          <div >
            <ul>
              <li><a href=''>Home</a></li>
              <li><a href=''>About</a></li>
              <li><a href=''>Services</a></li>
              <li><a href=''>Gallery</a></li>
              <li><a href=''>Products</a></li>
              <li><a href=''>Contact Us</a></li>
            </ul>
          </div>

        </div>
      </header>
    </div>
  )
}

export default Header