import React from 'react';
import './intro.css';
import bg from "../../assets/image.png";
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';
const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Pheakkorny</span> <br/>I am a Web Developer</span>
            <p className='introPara'>I am a skilled and passionate Web Developer with experience in building <br/>responsive, dynamic, and user-centric websites to deliver high-quality web applications.</p>
            <Link to='contact' spy={true} smooth={true} offset={-75} duration={500}><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro
