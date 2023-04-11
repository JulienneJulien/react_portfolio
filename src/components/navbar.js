import React from 'react';
// To create the links
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    const [expandNav, setExpandNav] = useState(false);
  return (
    <div className='navbar'> 
      <div className='toggleButton'> 
       <button><FontAwesomeIcon icon={faBars} /></button>
    </div>
    <div className='links'>
        <Link to="/"> Home </Link>
        <Link to="/About"> About </Link>
        <Link to="/Portfolio"> Portfolio </Link>
        <Link to="/Contact"> Contact </Link>
        <Link to="/Resume"> Resume </Link>
    </div>
    </div>
  )
}

export default Navbar