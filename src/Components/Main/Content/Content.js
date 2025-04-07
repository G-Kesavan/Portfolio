import React from 'react'
import './Content.css'
import Navber from '../Navber/Navber'
import Heading from './HeadPart'
import HomePage from '../../ListContent/Home/HomePage'

const Content = () => {
  return (
    <section className='content'>
        <Heading/>
        <HomePage/>
        <Navber/>
    </section>
  )
}

export default Content