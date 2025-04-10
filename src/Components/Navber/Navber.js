
import './Navber.css'
import { FaProjectDiagram } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { GiGiftOfKnowledge } from "react-icons/gi";

const Navber = ({SetValue}) => {
  return (
    <nav className='navbar'>
      <ul>
        <li onClick={()=>SetValue('project')}><FaProjectDiagram /> Project</li>
        <li onClick={()=>SetValue('skill')}><GiSkills /> Skills</li>
        <li onClick={()=>SetValue('experience')}><GiGiftOfKnowledge /> Experience</li>
        <li onClick={()=>SetValue('certificate')}><PiCertificateBold /> Certificate</li>
      </ul>
    </nav>
  )
}

export default Navber