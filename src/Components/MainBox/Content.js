import React from 'react'
import './Content.css'
import Navber from '../Navber/Navber'
import HeadPart from './HeadPart'
import HomePage from '.././ListContent/Home/HomePage'
import { useState } from 'react'

const Content = () => {
  var home='home'
  var [pages, setpages] = useState("home")
  const pageclick =(page)=>{

  }
  return (
    <section className='content'>
        <HeadPart/>
        {!{pages}==={home}?(
          <h1>hi</h1>
        ):(<HomePage/>)}
        
        <Navber/>
    </section>
  )
}

export default Content