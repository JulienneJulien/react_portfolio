import React from 'react'
import homeImg from '..//images/homeImg.png';
import "../styles/Home.css";
import Typed from "typed.js";

function Home() {
  const title = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(title.current, {
      strings: ['DEVELOPER', 'WEB DESIGNER' , 'CODER'],
      typeSpeed: 200,
      loop: false,
    });

    return () => {
     
      typed.destroy();
    };
  }, []);

  const quote = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(quote.current, {
      strings: ['(Hello World!)', '(Nice to see you here!)', '(I enjoy CODING!)'],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
     
      typed.destroy();
    };
  }, []);

  return (
    <div className='home'>
            <div className='introContainer'>
               <h1 className='introHome'>Welcome! &#128075;&#127999; I'm Julienne</h1><span className='spanHome' ref={title} />

              </div>
        <div>
              <div className='homeContainer'>
                <img src={homeImg} className='imgHome' alt="portfolio_profile_picture" /> 
              </div>

              <div className='quoteContainer'>
            <h1 className='quote'>'“It’s kind of fun to do the impossible.” – Walt Disney'</h1>
              <span className='codeMessage'>console.log</span><span className='spanHome2' ref={quote} />
              <br/>
            </div>
      </div>
    </div>
  )
}


export default Home