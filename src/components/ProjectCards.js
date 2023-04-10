import React from 'react'

function ProjectCards({title, image}) {
  return (
    <div className='projectCards'>
    <div style={{backgroundImage: `url(${image})`}} className='bgImage' />
    <h2> {title} </h2>
    </div>
  )
}

export default ProjectCards