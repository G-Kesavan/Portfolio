
import './Navber.css'
import { FaProjectDiagram } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { GiGiftOfKnowledge } from "react-icons/gi";

const Navber = ({setPageName}) => {
  return (
    <nav className='navbar'>
      <ul>
        <li onClick={()=>setPageName('project')}><FaProjectDiagram />&nbsp;Project</li>
        <li onClick={()=>setPageName('skill')}><GiSkills />&nbsp;Skills</li>
        <li onClick={()=>setPageName('experience')}><GiGiftOfKnowledge />&nbsp;Experience</li>
        <li onClick={()=>setPageName('certificate')}><PiCertificateBold />&nbsp;Certificate</li>
      </ul>
    </nav>
  )
}

export default Navber