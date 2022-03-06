import React from 'react'

function About() {
  return (

    <div className="container-fluid justify-content-center blurry-text opacity-100" id="about">
      <h1 className="col fw-normal">DARKMODE.js</h1>
      <p>learn more about the darkmode i used...</p>
      <a href="https://darkmodejs.learn.uno/" rel="noopener noreferrer" target="_blank">https://darkmodejs.learn.uno/</a>

      <h4>Notes:</h4>
      <p>very simple to use for basic single page apps</p>
      <p>however - on initial set up, all images also inversed = need to add classes to ignore dark mode</p>
      <p>my portfolio originally used AOS (animation on scroll) plugins and because of this, darkmode.js conflicted and did not work properly</p>
      <p>nav bar burger menu - not flipping because icon is svg would need to set state and toggle between navicon light/dark to make fully responsive</p>
      
      <br></br><br></br><br></br>
      <h4>Demo sites</h4>
      <p><a href="https://tradivegan.com" rel="noopener noreferrer" target="_blank">https://tradivegan.com (with custom label)</a></p>
      <p><a href="https://what.toeat.in" rel="noopener noreferrer" target="_blank">https://what.toeat.in (without custom label)</a></p>
      <p><a href="https://www.kanbanote.com" rel="noopener noreferrer" target="_blank">https://www.kanbanote.com (without the widget, once logged in)</a></p>
      <p><a href="https://www.sandoche.com" rel="noopener noreferrer" target="_blank">https://www.sandoche.com (with custom label)</a></p>
      <p><a href="https://pilab.dev" rel="noopener noreferrer" target="_blank">https://pilab.dev (without the widget, with a custom toggle button)</a></p>
      

      <img src= "https://i.imgur.com/TgX2rf8.jpg?1" className= "interests-img col-6 col-md-3" alt="interests img" />   
      <p>this image will also have its colours inversed unless i apply a class to stop it from taking the darkmode effect</p>
    
      <br></br><br></br>
      <div className="container">
        <div className="d-flex flex-row justify-content-center">
          <a href="mailto:achan81@icloud.com" rel="noopener noreferrer" target="_blank">
            <img alt="mail" src="https://i.imgur.com/l0ehegq.png" className="icon mail-image col"/></a>

          <a href="https://github.com/Achan81/" rel="noopener noreferrer" target="_blank">
            <img alt="acgh" src="https://i.imgur.com/yWic7vC.png" className="icon acgh-image col"/></a>
            
          <a href="https://www.linkedin.com/in/achan81/" rel="noopener noreferrer" target="_blank">
            <img alt="linkedin" src="https://i.imgur.com/6j6BRm3.png" className="icon linkedin-image col"/></a>

        </div>
      </div>
    </div>
  )
}
export default About