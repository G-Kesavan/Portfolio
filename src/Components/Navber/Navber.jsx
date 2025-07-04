
import './Navber.css'
import { FaProjectDiagram } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navber = ({setPageName}) => {
  return (
    <nav className='navbar'>
      <ul>
        <li onClick={()=>setPageName('project')}><Link to='/project'><FaProjectDiagram />&nbsp;Project&nbsp;</Link></li>
        <li onClick={()=>setPageName('skill')}><Link to='/skill'><GiSkills />&nbsp;Skills&nbsp;</Link></li>
        <li onClick={()=>setPageName('experience')}><Link to='/experience'><GiGiftOfKnowledge />&nbsp;Experience&nbsp;</Link></li>
        <li onClick={()=>setPageName('certificate')}><Link to='/certificate'><PiCertificateBold />&nbsp;Certificate&nbsp;</Link></li>
      </ul>
    </nav>
  )
}

export default Navber