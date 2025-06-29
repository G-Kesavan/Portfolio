import React from 'react'
import './Footer.css'
import {  FaLinkedin, FaPhone } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io5';

const Footer = ({setPageName}) => {

  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className='footerLink'>
        <a href="mailto:mr.kesavaperumal@gmail.com "><SiGmail/></a>
        <a href='https://wa.me/6374790292'><IoLogoWhatsapp/></a>
        <a href='tel:+916374790292'><FaPhone/></a>
        <a href='https://www.linkedin.com/in/kesavan-bca?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin/></a>
      </div>
      <nav className='footerMenu'>
        <ul>
          <li onClick={()=>setPageName('home')}>Home</li>
          <li onClick={()=>setPageName('about')}>About</li>
          <li onClick={()=>setPageName('contact')}>Contact</li>
          <li onClick={()=>setPageName('biodata')}>Biodata</li>
        </ul>
      </nav>
      <div className='footerText'>
        <p>Copyright &copy; {currentYear} Designned by Kesavan</p>
      </div>
    </footer>
  )
}

export default Footer