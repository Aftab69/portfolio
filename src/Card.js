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
            <button><a href={props.linkcode} target="_blank" rel="noreferrer">Code</a></button>
            <button><a href={props.linkapp} target="_blank" rel="noreferrer">App</a></button>
         </div>
      </div>
    </>
  )
}

export default Card