import React from 'react'
import './HomePage.css'
import Photo from '../../../Image/MyPhoto.png'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'


const HomePage = () => {
  const percentage=90;

  return (
    <section className='HomePage'>
      <div className='profile'>
          <div className='about'>
            <h2>Hi, I'm Kesava Perumal </h2>
            <p>A passionate web developer dedicated to crafting responsive, user-friendly websites that blend creativity with clean, efficient code. With hands-on experience in HTML, CSS, and ReactJS, I specialize in turning ideas into dynamic digital experiences.</p>
          </div>
          <img src={Photo} alt='profile'/>
      </div>

      <div className='example'>
        <div>
          <p>My goal is to grow into a full-stack developer, contribute to impactful projects, and build intuitive digital experiences that solve real-world problems.
          </p>
        </div>
      </div>

      <div className='skills'>
        <div className='skill-div'>Skills Count: 8+</div>
        <div className='skill-div'>Project Count: 5</div>
        <div className='skill-div'>Certifications: 6</div>
        <div className='skill-div'>Problam solving: 0</div>
      </div>
      
      <div className='language'>
        <div className='languages'>
          <p>English</p>
          <div className='language-bar'>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: `rgba(36, 35, 35,0.6)`,
                textColor: 'white',
                trailColor: 'white',
                textSize: '16px',
                pathTransitionDuration: 0.8,
              })}
            />
          </div>
        </div>
        <hr/>
        <div className='languages'>
          <p>Tamil</p>
          <div className='language-bar'>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: `rgba(36, 35, 35,0.6)`,
                textColor: 'white',
                trailColor: 'white',
                textSize: '16px',
                pathTransitionDuration: 0.8,
              })}
            />
          </div>
        </div>      
      </div>
    </section>
  )
}

export default HomePage