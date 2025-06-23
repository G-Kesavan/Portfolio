import React from 'react'
import './Content.css'
import Heading from './Heading'
import HomePage from '../Pages/Home/HomePage.jsx'
import AboutPage from '../Pages/About/AboutPage.jsx'
import ContactPage from '../Pages/Contact/ContactPage.jsx'
import BiodataPage from '../Pages/Biodata/BiodataPage.jsx'
import ProjectPage from '../Pages/Project/ProjectPage.jsx'
import SkillPage from '../Pages/Skill/SkillPage.jsx'
import ExperiencePage from '../Pages/Experience/ExperiencePage.jsx'
import CertificatePage from '../Pages/Certificate/CertificatePage.jsx'


const Content = ({value}) => {

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