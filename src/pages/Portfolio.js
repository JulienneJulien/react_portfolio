import React from 'react'
import ProjectCards from '../components/ProjectCards'
import profile from '../images/profile.jpg'
import "../styles/Portfolio.css"

function Portfolio() {
  return (
    <div className='portfolio'>
      <h2>My Projects</h2>
      <div className='portfolioCards'>
        <ProjectCards title= 'test1' image={profile}/>
        <ProjectCards title= 'test2' image={profile}/>
        <ProjectCards title= 'test3' image={profile}/>
        <ProjectCards title= 'test4' image={profile}/>
        <ProjectCards title= 'test5' image={profile}/>
        <ProjectCards title= 'test6' image={profile}/>
        </div>
    </div>
  )
}

export default Portfolio