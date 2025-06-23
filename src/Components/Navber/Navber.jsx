
import './Navber.css'
import { FaProjectDiagram } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { GiGiftOfKnowledge } from "react-icons/gi";

const Navber = ({SetValue}) => {
  return (
    <nav className='navbar'>
      <ul>
        <li onClick={()=>SetValue('project')}><FaProjectDiagram />&nbsp;Project</li>
        <li onClick={()=>SetValue('skill')}><GiSkills />&nbsp;Skills</li>
        <li onClick={()=>SetValue('experience')}><GiGiftOfKnowledge />&nbsp;Experience</li>
        <li onClick={()=>SetValue('certificate')}><PiCertificateBold />&nbsp;Certificate</li>
      </ul>
    </nav>
  )
}

export default Navber