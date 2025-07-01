import React from 'react'
import './Sidebar.css'
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { SiBiome } from "react-icons/si";
import { Link } from 'react-router-dom';


const Sidebar = ({setPageName}) => {
  return (
    <nav className='sidebar'>
      <ul>
        <li onClick={()=>setPageName('home')}><Link to='/'><FaHome />Home</Link></li>
        <li onClick={()=>setPageName('about')}><Link to='/about'><IoMdContact />About</Link></li>
        <li onClick={()=>setPageName('contact')}><Link to='/contact'><FaPhone />Contact</Link></li>
        <li onClick={()=>setPageName('biodata')}><Link to='/biodata'><SiBiome />Biodata</Link></li>
      </ul>
    </nav>
  )
}

export default Sidebar