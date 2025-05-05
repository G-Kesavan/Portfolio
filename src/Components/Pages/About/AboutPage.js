import React from 'react'
import './About.css'
import Photo from '../../../Image/MyPhoto.png'

const About = () => {
  return (
    <section className='AboutPage'>
      <div className='part1'>
        <img src={Photo} alt='profile'/>
        <div className='detial'>
          <p>name</p>
          <p>name</p>
          <p>name</p>
          <p>name</p>
        </div>

        <div className='point'>
        <p>name</p>
          <p>name</p>
          <p>name</p>
          <p>name</p>
        </div>

      </div>

      <div className='part2'>
        <div className='education'>
          ed
        </div>

        <div className='basic'>
          weakness
        </div>
        
      </div>
    </section>
  )
}

export default About