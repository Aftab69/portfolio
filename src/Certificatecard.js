import React from 'react';
import "./Certificatecard.css";

const Certificatecard = (props) => {
  return (
    <>
        <div className='certificateCardContainer'>
            <img src={props.cardImage} alt={props.cardImage} />
            <p>{props.cardData}</p>
        </div>
    </>
  )
}

export default Certificatecard