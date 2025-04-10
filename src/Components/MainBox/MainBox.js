import React from 'react'
import './MainBox.css'
import Navber from '../Navber/Navber'
import HeadPart from './HeadPart'
import HomePage from '../Pages/Home/HomePage'
import ProjectPage from '../Pages/Project/ProjectPage'


const Content = ({value,SetValue}) => {

  return (
    <section className='MainBox'>
        <HeadPart/>
        {value==='home' && <HomePage/>}
        {value==='project' && <ProjectPage/>}
        <Navber
        SetValue={SetValue}/>
    </section>
  )
}

export default Content