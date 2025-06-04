import React from 'react'
import './Biodata.css'
import Photo from '../../../Image/MyPhoto.png'

const Biodata = () => {
  return (
    <section className='BiodataPage'>
      <div className='part1'>
        <div>
          <img src={Photo} alt='profile'/>
        </div>
        <div className='detial'>
          <p><label>Name : </label>Kesava perumal g</p>
          <p><label>Age : </label>22</p>
          <p><label>Qulification : </label>BCA</p>
          <p><label>Batch : </label>2025</p>
        </div>

        <div className='point'>
          <p><label>Date of birth:</label>09/03/2003</p>
          <p><label>Gender:</label>Male</p>
          <p><label>Religion:</label>india</p>
          <p><label>State:</label>Tamil nadu</p>
          <p><label>Mother tang:</label>Tamil</p>
        </div>

      </div>

      <div className='part2'>
        <ul className='edu'>
          <li>
            <div className='edu-detial'>
              <h3>SSLC</h3>
              <h4>State bourd of Tamilnadu</h4>
              <p>NLC Her Sec Re School mandarakuppam</p>
              <p>2017 to 2018</p>
            </div>
          </li>
          <li>
            <div className='edu-detial'>
              <h3>HSS</h3>
              <h4>State bourd of Tamilnadu</h4>
              <p>NLC Her Sec Re School mandarakuppam</p>
              <p>2018 to 2020</p>
            </div>
          </li>
          <li><div className='edu-detial'>
              <h3>Appretice Ship</h3>
              <h4>Minastry of skill development</h4>
              <p>NLC (national lignight corpretion)</p>
              <p>2020 to 2022</p>
            </div>
          </li>
          <li>
            <div className='edu-detial'>
              <h3>BCA</h3>
              <h4>Annamalai Universty</h4>
              <p>Jawaher Science College Neyveli-2</p>
              <p>2022 to 2025</p>
            </div>
          </li>
        </ul>

        <div className='basic'>
          
        </div>
        
      </div>
    </section>
  )
}

export default Biodata