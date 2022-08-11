import React, { useState } from 'react';
import "./Card.css";

const Card = (props) => {
  const [divstyle, setDivstyle] = useState({display:"none"})
  const handleclick = () =>{
      setDivstyle({display:"block"})
  }
  const handlebutton = () =>{
    setDivstyle({display:"none"})
  }
  return (
    <>
      <div className='cardContainer'>
         <h3>{props.projectName}</h3>
         <img onClick={handleclick} src={props.cardImage} alt={props.cardImage} />
         <p>{props.projectDescription}</p>
         <div className='cardButtons'>
            <button><a href={props.linkcode} target="_blank" rel="noreferrer">Code</a></button>
            <button><a href={props.linkapp} target="_blank" rel="noreferrer">App</a></button>
         </div>
      </div>
      <div className='popup' style={divstyle}>
          <div className='popupContainer'>
            <button onClick={handlebutton}>X</button>
            <img src={props.cardImage} alt={props.cardImage} />
          </div>
        </div>
    </>
  )
}

export default Card