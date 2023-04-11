import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { GitHub, LinkedIn, Layers } from '@mui/icons-material';
import "../styles/Footer.css"


function Footer() {
  return (
    <div className='footer'>
        <div className='socialLinks'>
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        <a href='https://github.com/JulienneJulien'><GitHub /></a>  
        <a href='https://www.linkedin.com/in/Julienne-J/'><LinkedIn/></a>
        <a href='https://stackoverflow.com/users/21582441/julienne-julien?tab=profile'><Layers/></a>
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