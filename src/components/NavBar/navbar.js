import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import ContactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu' >
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Skill</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Education</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Project</Link>
        <Link activeClass='active' to='profile' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Profile</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => (
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
      )}>
           <img src={ContactImg} alt='contactImg' className='desktopMenuImg' />Contact Me
      </button>
      <img src={menu} alt='Menu' className='mobMenu'  onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Skill</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'  onClick={()=>setShowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Project</Link>
          <Link activeClass='active' to='profile' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Profile</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  );
}

export default Navbar;
