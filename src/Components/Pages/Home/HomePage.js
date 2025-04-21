import React from 'react'
import './HomePage.css'
import Photo from '../../../Image/MyPhoto.png'
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'


const HomePage = () => {
  const persentage=90;
  return (
    <section className='HomePage'>
      <div className='profile'>
          <p>Hi I am Kesavan<br/>web developer</p>
          <img src={Photo} alt='photo'/>
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
        <div className='languages'>
          <p>English</p>
          <div className='bar'>
          <CircularProgressbar
            value={persentage}
            text={`${persentage}%`}
          />
          </div>
        </div>
        <div className='languages'>
          <p>Tamil</p>
          <div className='bar'>
            <CircularProgressbar
            value={persentage}
            text={`${persentage}%`}
          />
          </div>
        </div>      
      </div>
    </section>
  )
}

export default HomePage