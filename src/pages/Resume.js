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
     <p><b><i>This downloadable link provides access to my <a href="https://github.com/JulienneJulien/react_portfolio/files/11195854/RESUME.TECHNICAL.ONE.docx" 
     class="link">resume</a></i></b></p>

    <div className='experience'> 
    
    <VerticalTimeline lineColor='#cf3acf'>
      <VerticalTimelineElement id='timelineBox' className='vertical-timeline-element--work' 
        date='APR 2018-CURRENT'
        iconStyle={{ background:"#cf3acf", color : 'black'}}
        icon={<WorkHistoryIcon/>}
>
        <h2 className='vertical-timeline-element-title'>
        Alight Solutions - Orlando, FL
          </h2>
          <p>Customer Support Associate</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--work' 
        date='FEB 2018-APR 2018'
        iconStyle={{ background:"#cf3acf", color : 'black'}}
        icon={<WorkHistoryIcon/>}
>
        <h2 className='vertical-timeline-element-title'>
        SeaWorld Parks & Entertainment - Orlando, FL
          </h2>
          <p>Food Service Attendant</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--eduation' 
        date='OCT 2022-MAY 2023'
        iconStyle={{ background:"#cf3acf", color : 'black'}}
        icon={<SchoolIcon/>}
>
        <h2 className='vertical-timeline-element-title'>
        University of Central Florida -Orlando, FL
          </h2>
          <p>Certificate Of Completion</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--eduation' 
        date='JUN 2017'
        iconStyle={{ background:"#cf3acf", color : 'black'}}
        icon={<SchoolIcon/>}
>
        <h2 className='vertical-timeline-element-title'>
        Blanche Ely High School - Pompano Beach, FL
          </h2>
          <p>High School Diploma</p>
      </VerticalTimelineElement>
      </VerticalTimeline>
      <br></br>
      
      </div>

      <br></br>
  </div>
  )
}

export default Resume;