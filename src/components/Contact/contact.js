import React, { useRef } from 'react';
import './contact.css';
import ProfileImg from '../../assets/profile.JPG'; // Replace with your real profile image
import FacebookIcon from '../../assets/facebook-icon.png';
import Telegram from '../../assets/telegram.png';
import YouTubeIcon from '../../assets/youtube.png';
import Github from '../../assets/github.webp';
import LinkIn from '../../assets/linkin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_89v8wyh', 'template_iduo6iz', form.current, {
        publicKey: '-aKJ6QdxBe03-Wwc1',
      })
      .then(
        () => {
          console.log('SUCCESS');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id='contactPage'>
      {/* PROFILE SECTION */}
      <div id='profile'>
        <h1 className='contactPageTitle'>My Profile</h1>
        <div className='profileCard'>
          <img src={ProfileImg} alt='Profile' className='profileImage' />
          <div className='profileDetails'>
            <p><strong>Name:</strong> Born Pheakkorny</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Birth Date:</strong> June 10, 2000</p>
            <p><strong>Birth Place:</strong> Prey Veng, Cambodia</p>
            <p><strong>Current Address:</strong> Mean Chey, Phnom Penh</p>
            <p><strong>Phone:</strong> +855 96 902 7063</p>
            <p><strong>Email:</strong> pheakkorny@gmail.com</p>
          </div>
        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='name' required />
          <input type='email' className='email' placeholder='Your Email' name='email' required />
          <textarea className='msg' name='message' rows='5' placeholder='Your Message' required></textarea>
          <button type='submit' className='submitBtn'>Submit</button>
          <div className='links'>
            <a href="https://www.facebook.com/pheakkornymilkyway?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt='Facebook' className='link' />
            </a>
            <a href="https://t.me/bornpheakkorny" target="_blank" rel="noopener noreferrer">
                <img src={Telegram} alt='Telegram' className='link' />
            </a>
            <a href="https://www.youtube.com/@TechSharing-z4w/videos" target="_blank" rel="noopener noreferrer">
                <img src={YouTubeIcon} alt='YouTube' className='link' />
            </a>
            <a href="https://github.com/Pheakkorny?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt='Github' className='link' />
            </a>
            <a href="https://www.linkedin.com/in/pheakkorny-born-15259b249" target="_blank" rel="noopener noreferrer">
                <img src={LinkIn} alt='LinkIn' className='link' />
            </a>
        </div>

        </form>
      </div>
    </section>
  );
};

export default Contact;
