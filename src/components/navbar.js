import React from 'react';
// To create the links
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'> 
      <div className='toggleButton'> 
        <button> </button>
    </div>
    <div className='links'>
        <Link to="/"> Home </Link>
        <Link to="/"> About </Link>
        <Link to="/Portfolio"> Portfolio </Link>
        <Link to="/Contact"> Contact </Link>
        <Link to="/Resume"> Resume </Link>
    </div>
    </div>
  )
}

export default Navbar