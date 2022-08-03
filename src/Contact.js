import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className='contactpageContainer' id='contact'>
        <div className='contactpageHeading'>
          <p>-: Contact Me :-</p> 
        </div>
        <div className='formContainerBox'>
          <div className='formContainer'>
              <input type="text" placeholder='Enter your name here' />
              <input type="email" placeholder='Enter a valid email address' />
              <textarea type="text" placeholder='Enter your message' />
              <button>Send message</button>
          </div> 
        </div>
        <div className='infoContainer'>
          {/* Might add information later */}
        </div>
      </div>
    </>
    
  );
}

export default Contact