import React from 'react'
import './Footer.css'
import {  FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si';

const Footer = ({setPageName}) => {

  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className='footerLink'>
        <a href=''><SiGmail/></a>
        <a href=''><FaWhatsapp/></a>
        <a href=''><FaPhone/></a>
        <a href=''><FaLinkedin/></a>
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