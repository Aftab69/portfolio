import React, {useRef} from 'react';
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8pat0om', 'template_ui3wpc9', form.current, 'ZiJUUW6UQfngNLJ73')
      .then((result) => {
          console.log(result.text);
          window.alert("Message sent successfully");
      }, (error) => {
          console.log(error.text);
          window.alert("Error");
      });
  };
  return (
    <>
      <div className='contactpageContainer' id='contact'>
        <div className='contactpageHeading'>
          <p>-: Contact Me :-</p> 
        </div>
        <div className='formContainerBox'>
          <form ref={form} onSubmit={sendEmail} className='formContainer'>
              <input type="text" name="user_name" placeholder='Enter your name here' required />
              <input type="email" name="user_email" placeholder='Enter a valid email address' required />
              <textarea type="text" name="message" placeholder='Enter your message' required />
              <button type="submit" value="Send">Send message</button>
          </form> 
        </div>
        <div className='infoContainer'>
          {/* Might add information later */}
        </div>
      </div>
    </>
    
  );
}

export default Contact