import React from 'react'
import './Biodata.css'
import Photo from '../../../Image/MyPhoto.png'

const Biodata = () => {
  return (
    <section className='BiodataPage'>
      <div className='part1'>
        <image>
          <img src={Photo} alt='profile'/>
        </image>
        <div className='detial'>
          <p><label>Name : </label>Kesava perumal g</p>
          <p><label>Age : </label>22</p>
          <p><label>Qulification : </label>BCA</p>
          <p><label>Batch : </label>2025</p>
        </div>

        <div className='point'>
          <p><label>Date of birth:</label>09/03/2003</p>
          <p><label>Gender:</label>Male</p>
          <p><label>Religen:</label>india</p>
          <p><label>State:</label>Tamil nadu</p>
          <p><label>Mother tang:</label>Tamil</p>
        </div>

      </div>

      <div className='part2'>
        <ul className='education'>
          <li>10th</li>
          <li>12th</li>
          <li>apprenticeship</li>
          <li>college</li>
        </ul>

        <div className='basic'>
          
        </div>
        
      </div>
    </section>
  )
}

export default Biodata