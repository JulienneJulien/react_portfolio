import React from 'react'
import ProjectCards from '../components/ProjectCards'
import profile from '../images/profile.jpg'
import "../styles/Portfolio.css"

function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>My Projects</h1>
      <div className='portfolioCards'></div>
        <ProjectCards title= 'test1' image={profile}/>
        <ProjectCards title= 'test2' image={profile}/>
        <ProjectCards title= 'test3' image={profile}/>
        <ProjectCards title= 'test4' image={profile}/>
        <ProjectCards title= 'test5' image={profile}/>
        <ProjectCards title= 'test6' image={profile}/>
    </div>
  )
}

export default Portfolio