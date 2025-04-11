import React from 'react'
import './Sidebar.css'
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { SiBiome } from "react-icons/si";


const Sidebar = ({SetValue}) => {
  return (
    <nav className='sidebar'>
      <ul>
        <li onClick={()=>SetValue('home')}><FaHome /></li>
        <li onClick={()=>SetValue('about')}><IoMdContact /></li>
        <li onClick={()=>SetValue('contact')}><FaPhone /></li>
        <li onClick={()=>SetValue('biodata')}><SiBiome /></li>
      </ul>
    </nav>
  )
}

export default Sidebar