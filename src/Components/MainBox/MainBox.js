import React from 'react'
import './MainBox.css'
import Navber from '../Navber/Navber'
import HeadPart from './HeadPart'
import HomePage from '../Pages/Home/HomePage'


const Content = () => {

  return (
    <section className='MainBox'>
        <HeadPart/>
        <HomePage/>
        <Navber/>
    </section>
  )
}

export default Content