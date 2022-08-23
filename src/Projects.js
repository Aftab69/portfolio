import React from 'react'
import "./Projects.css";
import Card from './Card';
import image1 from "../src/Images/project1image.png";
import image2 from "../src/Images/project2image.png";
import image3 from "../src/Images/project3image.png";

const Projects = () => {
  const link1code = "https://github.com/Aftab69/movie-generator";
  const link1app = "https://moviegeneratorsite.netlify.app/"
  const link2code = "https://github.com/Aftab69/portfolio";
  const link2app = "https://aftabhussain.netlify.app/";
  const link3code = "https://github.com/Aftab69/authentication-app";
  const link3app = "https://quotezapp.herokuapp.com/";

  return (
    <>
      <div className='projectsContainer' id='projects'>
        <h3>-: Take a look at my Projects :-</h3>
        <div className='elementsContainerProjectsPage'>
          <Card linkcode={link1code} linkapp={link1app} cardImage={image1} projectName="Movie Generator" projectDescription="An app that generates random movies, lists out the popular as well as the trending movies, along with the search movie feature." />
          <Card linkcode={link2code} linkapp={link2app} cardImage={image2} projectName="Portfolio" projectDescription="This website is being built out of HTML, CSS, Javascript, ReactJS and EmailJS." />
          <Card linkcode={link3code} linkapp={link3app} cardImage={image3} projectName="Quotezapp" projectDescription="An app involving authentication where one can customize their quotes and show it to the world" />
          <Card linkcode={link2code} linkapp={link2app} cardImage={image2} projectName="Portfolio" projectDescription="This website is being built out of HTML, CSS, Javascript, ReactJS and EmailJS." />
        </div>
      </div>
    </>
  )
}

export default Projects