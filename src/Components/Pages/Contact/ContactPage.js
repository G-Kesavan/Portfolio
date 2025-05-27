import React,{useState} from 'react'
import './Contact.css'
import {db} from '../../../firebase'
import { collection,addDoc } from 'firebase/firestore'

const Contact = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")
  
  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      await addDoc(collection(db,"contacts"),{
      name,
      email,
      message,
    });

    alert('message has been submitted');
    setname('');
    setemail('');
    setmessage('');
    }
    catch(error){
      alert(error.message);
    }
  };
  return (
    <section className='ContactPage'>
      <form className='contactForm' onSubmit={handleSubmit}>
        <h2>Contact Me</h2>

        <div className='inputcon name'>
          <label className='label'>Name :</label>
          <input type='text'  required  value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter the name'></input>
        </div>

        <div className='inputcon email'>
          <label className='label'>From :</label>
          <input type='email' required  value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter the email'></input>
        </div>
        <div className='message'>
          <label className='label'>Message :</label>
          <textarea  value={message} onChange={(e)=>setmessage(e.target.value)} placeholder='Enter the message'></textarea>
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