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


const Content = ({Page,scrollTop}) => {

  return (
    <article className='Content'>
        <Heading/>
        {Page==='home' && <HomePage/>}
        {Page==='about' && <AboutPage/>}
        {Page==='contact' && <ContactPage/>}
        {Page==='biodata' && <BiodataPage/>}
        {Page==='project' && <ProjectPage/>}
        {Page==='skill' && <SkillPage scrollTop={scrollTop}/>}
        {Page==='experience' && <ExperiencePage/>}
        {Page==='certificate' && <CertificatePage/>}
    </article>
  )
}

export default Content