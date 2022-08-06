import React, { useRef } from 'react';
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
      e.target.reset();
  };
  return (
      <>
       <div id='contact' className='contactpageContainer'>
           <div className='contactpageHeading'>
                <p>-: Contact Me :-</p>
           </div>
           <div className='contactformContainer'>
               <form ref={form} onSubmit={sendEmail} className='formContainer'>
                  <input type="text" name="user_name" placeholder='Enter your name' required />
                  <input type="email" name="user_email" placeholder='Enter a valid email address' required />
                  <textarea type="text" name="message" placeholder='Enter your message' required />
                  <button type="submit" value="Send">Submit</button>
               </form>
           </div>
           <div className='contactpageFooterElements'>
               <div className='footerEmail'>
                    <p>Email:</p>
                    <p>aftabhssn3@gmail.com</p>
                </div>
               <div className='footerAddress'>
                    <p>Address:</p>
                    <p>Six Mile, Guwahati, Assam, India</p>
               </div>
               <div className='footerNumber'>
                    <p>Phone No:</p>
                    <p>+917576081171</p>
               </div>
           </div>
       </div>
      </>
  );
}

export default Contact;