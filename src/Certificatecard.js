import React from 'react';
import { useState } from 'react';
import "./Certificatecard.css";

const Certificatecard = (props) => {
  const [divstyle, setDivstyle] = useState({display:"none"})
  const handleclick = () =>{
      setDivstyle({display:"block"})
  }
  const handlebutton = () =>{
    setDivstyle({display:"none"})
  }

  return (
    <>
        <div className='certificateCardContainer'>
            <img onClick={handleclick} src={props.cardImage} alt={props.cardImage} />
            <p>{props.cardData}</p>
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

export default Certificatecard