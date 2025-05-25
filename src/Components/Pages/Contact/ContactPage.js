import React from 'react'
import './Contact.css'

const Contact = () => {

  const labelhidded = ()=>{
  const name=document.querySelector('.inputvalue');
  const label=document.querySelector('.label');
  if(name.nodeValue===true){
    console.log(label);
  }
  
  }
  
  return (
    <section className='ContactPage'>
      <form className='contactForm'>
        <h1>Contact Me</h1>

        <div className='inputcon name'>
          <label className='label'>Name :</label>
          <input type='text' required className='inputvalue' onChange={()=>labelhidded()}></input>
        </div>

        <div className='inputcon email'>
          <label className='label'>From :</label>
          <input type='email' required className='inputvalue'></input>
        </div>
        <div className='message'>
          <label className='label'>Message :</label>
          <textarea className='inputvalue'></textarea>
        </div>

        <button className='formBtn'>Submit</button>
      </form>
      <div className='link'>
        <ul>
          <li>WhatApp</li>
          <li>Phone</li>
          <li>Linkden</li>
          <li>Telegram</li>
        </ul>
      </div>
    </section>
  )
}

export default Contact