import React from 'react'
import "./Home.css";
import image1 from "./Images/waving.gif"

const Home = () => {
  return (
    <>
    <div className='homepageContainer'>
      <div className='textContainerBox'>
        <div className='textContainer'>
          <h3>Hi, my name is</h3>
          <h1>AFTAB HUSSAIN</h1>
          <h3>&amp;</h3>
          <h3>I specialise in</h3>
          <h1>WEB DEVELOPMENT</h1>
        </div>  
      </div>
      <div className='imageContainerBox'>
         <div className='imageContainer'>
          <img src={image1} alt={image1} />
         </div>
      </div>
    </div>
    </>
  )
}

export default Home