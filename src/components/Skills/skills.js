import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate Web Developer with experience in building responsive, dynamic, and user-centric websites. I have a strong command of HTML, CSS, JavaScript, and PHP, and I work comfortably with modern frameworks and libraries such as React, Vue.js, Node.js, and Laravel. My background includes writing clean and efficient code, integrating front-end and back-end technologies, and collaborating with cross-functional teams to deliver high-quality web applications. I am detail-oriented and committed to continuous learning to stay current with evolving web technologies.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesignImg' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Front-End Development - ( Web Design )</h2>
                    <p>Building or write Front-End Side (web pages) by using HTML, CSS, JavaScript, or frameworks: Bootstrap, React.js Vue.js. Click here to see my Projects.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesignImag' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Back-End Development - ( Rest-FUll API )</h2>
                    <p>Building or write back-End Side and API by using PHP, Node.js, Laravel, and Database: mySQL. Click here to see my Projects.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesignImg' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Full Stack Development</h2>
                    <p>Building a web appplication with ( React.js, Node.js, Express, Database:MySQL ) and Vite ( Vue.js, Laravel, Database:mySQL ). Click here to see my Projects.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
