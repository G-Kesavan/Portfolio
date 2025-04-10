import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <section className='home'>
      <div className='message'>
        <article>
          hi i am kesavan
          <br/>
          Web developer
        </article>
      </div>
      <div className='skills'>
        <div className='skill-div'>react</div>
        <div className='skill-div'>react</div>
        <div className='skill-div'>react</div>
        <div className='skill-div'>react</div>
      </div>
      <div className='photo'>
        <div>image</div>
      </div>
      <div className='language'>
        <div>language</div>
      </div>
      <div className='example'>
        <div>example</div>
      </div>
    </section>
  )
}

export default HomePage