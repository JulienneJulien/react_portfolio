import React from 'react'
import profilepic from '..//images/profile.jpg';
// import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='intro'>
          <h1> Welcome! &#128075;&#127999; I'm Julienne</h1>
            <h2> There is always one more bug to fix. – Ellen Ullman </h2>

              <div>
                <img src={profilepic} alt="portfolio_profile_picture"/> 
              </div>

            <div className='aboutMe'>
              <h2>The full-stack web development boot camp I am attending makes me passionate about gaining new knowledge and growing as a developer. Front-end web development appeals to me more because it appeals to all my passions. My creativity, curiosity, and problem-solving abilities are all incorporated into it. My goal is to continue learning and growing as a developer, and I strive to put my knowledge to work whenever possible.</h2>
            </div>
      </div>
    </div>
  )
}

export default Home