import React from 'react'
import './Content.css'
import Heading from './Heading'
import HomePage from '../Pages/Home/HomePage'
import AboutPage from '../Pages/About/AboutPage'
import ContactPage from '../Pages/Contact/ContactPage'
import BiodataPage from '../Pages/Biodata/BiodataPage'
import ProjectPage from '../Pages/Project/ProjectPage'
import SkillPage from '../Pages/Skill/SkillPage'
import ExperiencePage from '../Pages/Experience/ExperiencePage'
import CertificatePage from '../Pages/Certificate/CertificatePage'


const Content = ({value,SetValue}) => {

  return (
    <article className='Content'>
        <Heading/>
        {value==='home' && <HomePage/>}
        {value==='about' && <AboutPage/>}
        {value==='contact' && <ContactPage/>}
        {value==='biodata' && <BiodataPage/>}
        {value==='project' && <ProjectPage/>}
        {value==='skill' && <SkillPage/>}
        {value==='experience' && <ExperiencePage/>}
        {value==='certificate' && <CertificatePage/>}
    </article>
  )
}

export default Content