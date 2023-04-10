import React from 'react';
import { VerticalTimeline, VerticalTimelineElement  } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";


function Resume() {
  return (
  <div className='Resume'>
     <h2>Resume</h2> 

    <div className='experience'> 
    <VerticalTimeline lineColor='#413C58'>
      <VerticalTimelineElement className='vertical-timeline--element--eduation' 
        date=''
        iconStyle={{backgroud: '#413C58'}}
      ></VerticalTimelineElement>
      </VerticalTimeline>
      </div>
  </div>
  
   
  )
}

export default Resume;