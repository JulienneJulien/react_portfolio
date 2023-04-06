import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div>

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