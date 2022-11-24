import React from 'react'
import "./Projects.css";
import Card from './Card';
import image1 from "../src/Images/project1image.png";
import image2 from "../src/Images/project2image.png";
import image3 from "../src/Images/project3image.png";
import image4 from "../src/Images/project4image.png";
import image5 from "../src/Images/project5image.png";
import image6 from "../src/Images/project6image.png";

const Projects = () => {
  const link1code = "https://ekodaproductions.com/";
  const link1app = "https://ekodaproductions.com/";
  const link2code = "https://prettypurple.store/";
  const link2app = "https://prettypurple.store/";
  const link3code = "https://github.com/Aftab69/movie-generator";
  const link3app = "https://moviegeneratorsite.netlify.app/"
  const link4code = "https://github.com/Aftab69/portfolio";
  const link4app = "https://aftabhussain.netlify.app/";
  const link5code = "https://github.com/Aftab69/authentication-app";
  const link5app = "https://quotezapp.herokuapp.com/";
  const link6code = "https://github.com/Aftab69/hangman";
  const link6app = "https://thehangmanapp.netlify.app/";

  return (
    <>
      <div className='projectsContainer' id='projects'>
        <h3>-: Take a look at my Projects :-</h3>
        <div className='elementsContainerProjectsPage'>
        <Card linkcode={link1code} linkapp={link1app} cardImage={image1} projectName="Ekoda Productions" projectDescription="A web app built for the Ekoda Production House using HTML, CSS, Javascript, ReactJS and EmailJS." />
        <Card linkcode={link2code} linkapp={link2app} cardImage={image2} projectName="Pretty Purple Store" projectDescription="An E-commerce store built using HTML, CSS, Javascript, ReactJS and EmailJS." />
          <Card linkcode={link3code} linkapp={link3app} cardImage={image3} projectName="Movie Generator" projectDescription="An app that generates random movies, lists out the popular as well as the trending movies, along with the search movie feature." />
          <Card linkcode={link4code} linkapp={link4app} cardImage={image4} projectName="Portfolio" projectDescription="This website is being built out of HTML, CSS, Javascript, ReactJS and EmailJS." />
          <Card linkcode={link5code} linkapp={link5app} cardImage={image5} projectName="Quotezapp" projectDescription="An app involving authentication where one can customize their quotes and show it to the world" />
          <Card linkcode={link6code} linkapp={link6app} cardImage={image6} projectName="HangMan" projectDescription="A guessing game built out of HTML, CSS, Javascript and ReactJS" />
        </div>
      </div>
    </>
  )
}

export default Projects