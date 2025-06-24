import React from 'react'
import './Sidebar.css'
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { SiBiome } from "react-icons/si";


const Sidebar = ({setPageName}) => {
  return (
    <nav className='sidebar'>
      <ul>
        <li onClick={()=>setPageName('home')}><FaHome />Home</li>
        <li onClick={()=>setPageName('about')}><IoMdContact />About</li>
        <li onClick={()=>setPageName('contact')}><FaPhone />Contact</li>
        <li onClick={()=>setPageName('biodata')}><SiBiome />Biodata</li>
      </ul>
    </nav>
  )
}

export default Sidebar