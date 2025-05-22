import React from 'react';
import "./home.css";

const Social = () => {
  return (
   <div className="home__social">
    <a href="https://www.linkedin.com/in/lalit-atal-773281174/" className="home__social-icon" target='_blank'>
        <i class="uil uil-linkedin"></i>
    </a>
    {/* <a href="https://www.google.com/" className="home__social-icon" target='_blank'>
         <i class="uil uil-dribbble"></i>
    </a> */}
    <a href="https://github.com/Atal21" className="home__social-icon" target='_blank'>
         <i class="uil uil-github-alt"></i>
    </a>
    
   </div>
  )
}

export default Social

