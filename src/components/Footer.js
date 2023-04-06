import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { GitHub, LinkedIn } from '@mui/icons-material';


function Footer() {
  return (
    <div className='footer'>
        <div>
            
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        <GitHub/>
        <LinkedIn/>
        </div>
        <p>JayJae &#128156; Coding!</p>
        <p className='footnote'>
            Copyright &copy; <span id='cyear'></span> by Julienne Julien. All Rights Reserved.
        </p>
    </div>
    
  )
}
// JAVASCRIPT to AUTO UPDATE current year copyright
window.addEventListener('load', () => {
    const year = document.getElementById('cyear');
    year.innerHTML = new Date().getFullYear();
});
export default Footer