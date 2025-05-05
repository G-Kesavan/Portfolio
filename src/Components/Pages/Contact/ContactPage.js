import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='ContactPage'>
      <form className='contactForm'>
        <table>
          <tr>
            <td><label>Name :</label></td><td><input type='text' required></input></td>
          </tr>
          <tr>
            <td><label>From :</label></td><td><input type='mail' required></input></td>
          </tr>
          <tr>
            <td><input type='adderss'></input></td>
          </tr>
          <tr></tr>
        </table>
        <button>Submit</button>
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