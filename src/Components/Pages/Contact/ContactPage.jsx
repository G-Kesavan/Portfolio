import React,{useState} from 'react'
import './Contact.css'
import {db} from '../../.././API/ContactAPI.jsx'
import { collection,addDoc } from 'firebase/firestore'
import { IoLogoWhatsapp,IoLogoLinkedin,IoLocation,IoCopyOutline } from "react-icons/io5";
import { FaPhone ,FaTelegram} from "react-icons/fa6";
import { SiGmail} from "react-icons/si";
import { FaUserEdit} from "react-icons/fa";

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
        <div className='contact-details'>
          <strong>Get in touch with us for inquiries, support, or feedback.We're here to hel you every step of the way....</strong>
          <ul className='show-link'>
            <li><FaUserEdit/><p>Kesava Perumal G</p><IoCopyOutline/></li>
            <li><SiGmail/><p>mr.kesavaperumal@gmail.com</p><IoCopyOutline/></li>
            <li><FaPhone /><p>+91 63 74 79 02 92</p><IoCopyOutline/></li>
            <li><IoLocation/><p>8/277, Velikunan Kurichi, Virudhachalam TK, Cuddaloar, Tamil nadu - 607 804 ...</p><IoCopyOutline/></li>
          </ul>
        </div>
        <ul className='touch-link'>
          <li ><a href='https://wa.me/6374790292'><IoLogoWhatsapp /></a></li>
          <li><a href='tel:+916374790292'><FaPhone /></a></li>
          <li><a href='https://www.linkedin.com/in/kesavan-bca?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><IoLogoLinkedin /></a></li>
          <li><a href='https://t.me/KESAVAN420BOY'><FaTelegram/></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Contact