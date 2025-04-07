import React from 'react'
import './Sidebar.css'
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { SiBiome } from "react-icons/si";


const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <ul>
        <li><FaHome /></li>
        <li><IoMdContact /></li>
        <li><FaPhone /></li>
        <li><SiBiome /></li>
      </ul>
    </nav>
  )
}

export default Sidebar