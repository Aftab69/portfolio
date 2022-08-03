import React from 'react';
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className='skillsContainer' id='skills'>
          <div className='skillsHeading'>
                <p>-: Check out my skills :-</p>
          </div>
          <div className='elementsContainerSkillsPage'>
                <div className='individualElement'>
                    <div className='individualHeading'>
                       <p>Languages</p>
                    </div>
                    <div className='containerItems'>
                        <p>Javascript</p>
                    </div>
                </div>
                <div className='individualElement'>
                    <div className='individualHeading'>
                        <p>Front-End</p>
                    </div>
                    <div className='containerItems'>
                        <p>HTML/CSS</p>
                        <p>React</p>
                        <p>Bootstrap</p>
                        <p>JQuery</p>
                        <p>SASS</p>
                    </div>
                </div>
                <div className='individualElement'>
                    <div className='individualHeading'>
                        <p>Back-End</p>
                    </div>
                    <div className='containerItems'>
                         <p>Node</p>
                         <p>Express</p>
                         <p>MongoDB</p>
                         <p>Mongoose</p>
                    </div>
                </div>
                <div className='individualElement'>
                    <div className='individualHeading'>
                         <p>Tools</p>
                    </div>
                    <div className='containerItems'>
                         <p>Git</p>
                         <p>Heroku</p>
                         <p>Postman</p>
                         <p>Netlify</p>
                    </div>
                </div>
                <div className='individualElement'>
                    <div className='individualHeading'>
                         <p>Conceptual</p>
                    </div>
                    <div className='containerItems'>
                         <p>Responsive Design</p>
                    </div>
                </div>
          </div>
      </div>
    </>
  )
}

export default Skills