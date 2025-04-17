import React from 'react'
import './HomePage.css'
import Photo from '../../../Image/MyPhoto.png'

const HomePage = () => {
  return (
    <section className='HomePage'>
      <div className='message'>
          hi i am kesavan
          <br/>
          Web developer
      </div>

      <div className='photo'>
        <img src={Photo}/>
      </div>

      <div className='example'>
        <div>example</div>
      </div>

      <div className='skills'>
        <div className='skill-div'>react</div>
        <div className='skill-div'>react</div>
        <div className='skill-div'>react</div>
        <div className='skill-div'>react</div>
      </div>
      
      <div className='language'>
        <div>language</div>
      </div>
    </section>
  )
}

export default HomePage