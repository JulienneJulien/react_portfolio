import React from 'react'
import ProjectCards from '../components/ProjectCards'
// TO IMPORT LIST OF PROJECTS ARRAY
import {PortfolioCards} from "../helpers/PortfolioCardsList"
import "../styles/Portfolio.css"

function Portfolio() {
  return (
    <div className='portfolio'>
      <h2>My Projects</h2>
      <div className='portfolioCards'>
        {PortfolioCards.map((portfolio) => {
          return <ProjectCards title={portfolio.title} image={portfolio.image} />;
        })}
        </div>
    </div>
  )
}

export default Portfolio