import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import { PiLinkedinLogo, PiPhoneCall, PiWhatsappLogo} from 'react-icons/pi';
import { SlEnvolopeLetter } from 'react-icons/sl';

const Footer = ({setPageName}) => {

  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className='footerLink'>
        <a href="mailto:mr.kesavaperumal@gmail.com "><SlEnvolopeLetter fontSize='30px'/></a>
        <a href='https://wa.me/6374790292'><PiWhatsappLogo fontSize='38px'/></a>
        <a href='tel:+916374790292'><PiPhoneCall fontSize='36px'/></a>
        <a href='https://www.linkedin.com/in/kesavan-bca?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><PiLinkedinLogo fontSize='36px'/></a>
      </div>
      <nav className='footerMenu'>
        <ul>
          <li onClick={()=>setPageName('home')}><Link to='/'>Home</Link></li>
          <li onClick={()=>setPageName('about')}><Link to='/about'>About</Link></li>
          <li onClick={()=>setPageName('contact')}><Link to='/contact'>Contact</Link></li>
          <li onClick={()=>setPageName('biodata')}><Link to='/biodata'>Biodata</Link></li>
        </ul>
      </nav>
      <div className='footerText'>
        <p>Copyright &copy; {currentYear} Designned by Kesavan</p>
      </div>
    </footer>
  )
}

export default Footer