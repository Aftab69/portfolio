import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className='cardContainer'>
         <h3>{props.projectName}</h3>
         <img src={props.cardImage} alt={props.cardImage} />
         <p>{props.projectDescription}</p>
         <div className='cardButtons'>
            <button>Code</button>
            <button>App</button>
         </div>
      </div>
    </>
  )
}

export default Card