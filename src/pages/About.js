import React from 'react'
import profilepic from '..//images/profile.jpg';
import "../styles/About.css"

function About() {
  return (
    <div className='about'>
       <h2 className='titleNavsPage'>About Me</h2> 
      <div>
            <h2 className='introAbout'> There is always one more bug to fix. – Ellen Ullman </h2>

              <div className='aboutContainer'>
                <img src={profilepic} className='imgAbout' alt="portfolio_profile_picture"/> 
              </div>

            <div className='aboutMe'>
              <h2>The full-stack web development boot camp I attended made me passionate about gaining new knowledge and growing as a developer. Front-end web development appeals to me more because it appeals to all my passions. My creativity, curiosity, and problem-solving abilities are all incorporated into it. My goal is to continue learning and growing as a developer, and I strive to put my knowledge to work whenever possible.</h2>
            </div>
      </div>
      <div className='skills'>
        <h1> Skills </h1>
        <ol className='skillList'>
          <li className='skillItems'>
          <h2>Frontend Skills</h2>
            <span>
              ReactJs, HTML, CSS, BootStrap, NPM, HandleBars, MaterialUI, jQuery
            </span>
            </li>
            <li className='skillItems'>
          <h2>Backend Skills</h2>
            <span>
              NodeJs, MySQL, MongoDB, ExpressJS, Sequelize
            </span>
            </li>
            <li className='skillItems'>
          <h2>SeverSide Development Skills</h2>
            <span>
              MERN Stack, Progressive Web Applications
            </span>
            </li>
            <li className='skillItems'>
          <h2>Deployment/Command Line Fundamental Skills</h2>
            <span>
              Heroku, Git
            </span>
            </li>
            <li className='skillItems'>
            <h2><b><i>API Interaction</i></b></h2>
            <span>RESTful APIs, JSON</span>
            </li>
        </ol>
        <br></br>
      </div>
      <br></br>
    </div>
  )
}

export default About