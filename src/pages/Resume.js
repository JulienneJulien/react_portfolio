import React from 'react';
import { VerticalTimeline, VerticalTimelineElement  } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import "../styles/Resume.css";

function Resume() {
  return (
  <div className='Resume'>
     <h2>Resume</h2> 
        <br></br>
     <p>The downloadable link below provides access to my <a href="" class="link">resume</a>
        <br></br>
       </p>

    <div className='experience'> 
    <VerticalTimeline lineColor='#413C58'>
      <VerticalTimelineElement className='vertical-timeline-element--eduation' 
        date='2022-2023'
        iconStyle={{ background:"#413C58", color : '#00000'}}
        icon={<SchoolIcon/>}
>
        <h2 className='vertical-timeline-element-title'>
          Highschool
          </h2>
          <p>Diploma</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--eduation' 
        date='2022-2023'
        iconStyle={{ background:"#413C58", color : '#00000'}}
        icon={<SchoolIcon/>}
>
        <h2 className='vertical-timeline-element-title'>
          Highschool
          </h2>
          <p>Diploma</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--work' 
        date='2022-2023'
        iconStyle={{ background:"#413C58", color : '#00000'}}
        icon={<WorkHistoryIcon/>}
>
        <h2 className='vertical-timeline-element-title'>
          Highschool
          </h2>
          <p>Diploma</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--work' 
        date='2022-2023'
        iconStyle={{ background:"#413C58", color : '#00000'}}
        icon={<WorkHistoryIcon/>}
>
        <h2 className='vertical-timeline-element-title'>
          Highschool
          </h2>
          <p>Diploma</p>
      </VerticalTimelineElement>
      </VerticalTimeline>

      
      </div>
    
      
  </div>
  

  )
}

export default Resume;