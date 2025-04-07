import React from 'react'
import './Navber.css'
import { FaProjectDiagram } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { GiGiftOfKnowledge } from "react-icons/gi";

const Navber = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><FaProjectDiagram /> Project</li>
        <li><GiSkills /> Skills</li>
        <li><GiGiftOfKnowledge /> Experience</li>
        <li><PiCertificateBold /> Certificate</li>
      </ul>
    </nav>
  )
}

export default Navber