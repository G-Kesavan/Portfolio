import React from 'react'
import './HomePage.css'
import Photo from '../../../Image/MyPhoto.png'
import { CircularProgressBar } from "react-percentage-bar";

const HomePage = () => {
  return (
    <section className='HomePage'>
      <div className='profile'>
          <p>Hi I am Kesavan<br/>web developer</p>
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
        <div className='languages'>
          <p>English</p>
          <div className='bar'>
            <CircularProgressBar
            key=""
            styles={{root:{
              width:'80px',
              height:'80px',
            },}}
            percentage='65'
            color="#c6c1c1bd"
            trackColor='#3e3a3abe'
          />
          </div>
        </div>
        <div className='languages'>
          <p>Tamil</p>
          <CircularProgressBar
            key="" 
            percentage='65'
            color="#c6c1c1bd"
            trackColor='#3e3a3abe'
          />
        </div>      
      </div>
    </section>
  )
}

export default HomePage