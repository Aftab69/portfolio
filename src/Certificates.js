import React from 'react';
import "./Certificates.css";
import Carousel from 'react-elastic-carousel';
import Certificatecard from './Certificatecard';

import image1 from "./Images/Responsive Web Design Certificate.png";
import image2 from "./Images/Javascript Algorithms and Data Structures Certificate.png";
import image3 from "./Images/Front End Libraries Certificate.png";
import image4 from "./Images/Legacy Front End Certificate.png";
import image5 from "./Images/Data Visualization Certificate.png";
import image6 from "./Images/Legacy Data Visualization.png";
import image7 from "./Images/APIs and Microservices Certificate.png";
import image8 from "./Images/Quality Assurance Certificate.png";
import image9 from "./Images/Legacy Back End Certificate.png";
import image10 from "./Images/Legacy Information Security  and Quality Assurance Certificate.png";
import image11 from "./Images/Legacy Full Stack Certificate.png";

const Certificates = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1},
        { width: 500, itemsToShow: 1, itemsToScroll: 1},
        { width: 768, itemsToShow: 2, itemsToScroll: 2},
        { width: 1200, itemsToShow: 3, itemsToScroll: 3},
        { width: 1920, itemsToShow: 4, itemsToScroll: 4}
    ];

  return (
    <>
       <div id='certificates' className='certificatepageContainer'>
            <div className='certificateHeading'>
                <p>-: My freeCodeCamp Certificates :-</p>
            </div>
            <div className='certificateCarousel'>
                <Carousel breakPoints={breakPoints}>
                    <Certificatecard cardImage={image1} cardData={"Responsive Web Design Certificate"} />
                    <Certificatecard cardImage={image2} cardData={"Javascript Algorithms and Data Structures Certificate"} />
                    <Certificatecard cardImage={image3} cardData={"Front End Libraries Certificate"} />
                    <Certificatecard cardImage={image4} cardData={"Legacy Front End Certificate"} />
                    <Certificatecard cardImage={image5} cardData={"Data Visualization Certificate"} />
                    <Certificatecard cardImage={image6} cardData={"Legacy Data Visualization"} />
                    <Certificatecard cardImage={image7} cardData={"APIs and Microservices Certificate"} />
                    <Certificatecard cardImage={image8} cardData={"Quality Assurance Certificate"} />
                    <Certificatecard cardImage={image9} cardData={"Legacy Back End Certificate"} />
                    <Certificatecard cardImage={image10} cardData={"Legacy Information Security  and Quality Assurance Certificate"} />
                    <Certificatecard cardImage={image11} cardData={"Legacy Full Stack Certificate"} />
                </Carousel>   
            </div>
       </div>
    </>
  )
}

export default Certificates