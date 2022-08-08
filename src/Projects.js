import React from 'react'
import "./Projects.css";
import Card from './Card';
import image1 from "../src/Images/project1image.jpg";

const Projects = () => {
  return (
    <>
      <div className='projectsContainer' id='projects'>
        <h3>-: Take a look at my Projects :-</h3>
        <div className='elementsContainerProjectsPage'>
          <Card cardImage={image1} projectName="Project1" projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <Card cardImage={image1} projectName="Project2" projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <Card cardImage={image1} projectName="Project3" projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <Card cardImage={image1} projectName="Project4" projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
        </div>
      </div>
    </>
  )
}

export default Projects