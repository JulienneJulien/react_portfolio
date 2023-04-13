import React from 'react'
import profilepic from '..//images/profile.jpg';
import "../styles/Home.css";
import Typed from "typed.js";

function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['DEVELOPER', 'CODER' , 'DESIGNER'],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
     
      typed.destroy();
    };
  }, []);

  return (
    <div className='home'>
            <div>
               <h1 className='introHome'>Welcome! &#128075;&#127999; I'm Julienne</h1><span className='spanHome' ref={el} />

              </div>
        <div>
              <div className='homeContainer'>
                <img src={profilepic} className='imgHome' alt="portfolio_profile_picture" /> 
              </div>

            <div className='aboutMeHome'>
              <h2>The full-stack web development boot camp I am attending makes me passionate about gaining new knowledge and growing as a developer. Front-end web development appeals to me more because it appeals to all my passions. My creativity, curiosity, and problem-solving abilities are all incorporated into it. My goal is to continue learning and growing as a developer, and I strive to put my knowledge to work whenever possible.</h2>
              <br/>
            </div>
      </div>
    </div>
  )
}


export default Home