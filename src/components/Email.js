import { useState, useRef } from "react";
import React from 'react'
import emailjs from '@emailjs/browser';

const Email = () => {

const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');

    emailjs.sendForm('service_0cekjhp', 'template_xcrd6ah', form.current, 'PW_cj8Md17pZ2VMYw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  function handleScrollAnimation() {
    const elements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-top, .slide-in-bottom');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight * 0.7;
  
      if (elementPosition < windowHeight) {
        element.classList.add('active');
      } 
    });
  }

  window.addEventListener('scroll', handleScrollAnimation);

  return (
    <>
        <h1 className='contact slide-in-top'>CONTACT</h1>
        <div className="line slide-in-bottom"></div>
        <h3 className="contact-info slide-in-left" >Reach Out</h3>
      <div className="email-form slide-in-right">
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" value={name} onChange={handleNameChange} />
        <label>Email</label>
        <input type="email" name="user_email" value={email} onChange={handleEmailChange} />
        <label>Message</label>
        <textarea className='message-area' name="message" value={message} onChange={handleMessageChange}/>
        <input type="submit" value="Send" />
        </form>
      </div>
      <button className='button-54'> <a className='home-link' href='#section-1' >Top</a>  </button>
      
    </>
  );
}

export default Email