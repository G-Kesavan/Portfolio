
import './Navber.css'
import { FaProjectDiagram } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

const Navber = ({setPageName ,showOption,closeOption}) => {
  return (
    <nav className='navbar'>
      <ul>
        <li className='li-none' onClick={()=>setPageName('project')}><Link to='/project'><FaProjectDiagram />&nbsp;Project&nbsp;</Link></li>
        <li className='li-none' onClick={()=>setPageName('experience')}><Link to='/experience'><GiGiftOfKnowledge />&nbsp;Experience&nbsp;</Link></li>
        <li className='li-none' onClick={()=>setPageName('skill')}><Link to='/skill'><GiSkills />&nbsp;Skills&nbsp;</Link></li>
        <li className='li-none' onClick={()=>setPageName('certificate')}><Link to='/certificate'><PiCertificateBold />&nbsp;Certificate&nbsp;</Link></li>
        <li><Menu  showOption={showOption} closeOption={closeOption}/></li>
      </ul>
    </nav>
  )
}

export default Navber