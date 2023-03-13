import React from 'react'
import './app.scss'
function contact() {
  return (
    <div className='contact'>
        <div className='flex-contact'>
           <h1>Need My Help? Contact Us</h1>
           <form>
        <input placeholder='Full Name' type='text' required/>
        <input placeholder='Subject' type='text' required/>
        <input placeholder='Email' type='email' required/>
        <textarea placeholder='Write a message...'></textarea> 
        <button type='submit'>Send a Message</button>
        </form>
        </div>
        
    </div>
  )
}

export default contact