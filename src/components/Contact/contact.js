import React, {useRef} from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
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
          alert('Email Sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
              I have had the opportunity to work with a diverse group of companies. 
              Some of the notable companies I have worked  with includes.
            </p>
            <div className='clientImgs'>
              <img src={Walmart} alt='Walmart' className='clientImg'/>
              <img src={Adobe} alt='Adobe' className='clientImg'/>
              <img src={Microsoft} alt='Microsoft' className='clientImg'/>
              <img src={Facebook} alt='Facebook' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='name' required/>
            <input type='email' className='email' placeholder='Your Email' name='email' required />
            <textarea className='msg' name='message' rows='5' placeholder='Your Message' required></textarea>
            <button type='submite' className='submitBtn'Submit>Submite</button>
            <div className='links'>
                <img src={FacebookIcon} alt='Facebook' className='link'/>
                <img src={TwitterIcon} alt='Twitter' className='link'/>
                <img src={YouTubeIcon} alt='YouTube' className='link'/>
                <img src={InstagramIcon} alt='Instagram' className='link'/>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact
