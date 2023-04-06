import React from 'react'
// To create the links
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div className='navbar'> 
    <div className='toggleButton'> 
    <button></button>
    </div>
    <div className='links'>
        <Link to="/About"></Link>
        <Link to="/Portfolio"></Link>
        <Link to="/Contact"></Link>
        <Link to="/Resume"></Link>
    </div>
    </div>
  )
}

export default navbar