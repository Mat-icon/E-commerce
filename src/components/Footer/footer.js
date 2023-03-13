import React from 'react'
import './app.scss'
import Logo from '../../assests/logo.png'
function footer() {
  return (
    <div className='footer'>
     <div className='sub-footer'>
        <div className='sub-flex'>
            <img alt='flexfyre' src={Logo} />
            <div className='subscribe'>
                <h1>Subscribe to our Newsletter</h1>
                <input placeholder='Enter Email Address' type='text' required/>
                <button>Subscribe</button>
            </div>
        </div>
     </div>
     <div>
        <div className='footer-flex'>
        <div className='help'>
            <h2>Let us Help you</h2>
            <li><a href='e'>Help Center</a></li>
            <li><a href='e'>Report a Product</a></li>
            <li><a href='e'>How to Shop on FlexFyre?</a></li>
        </div>
        <div className='about'>
            <h2>About us</h2>
            <li><a href='e'>About Us</a></li>
            <li><a href='e'>Cookie Notice</a></li>
            <li><a href='e'>Privacy Notice</a></li>
        </div>

        <div className='about'>
            <h2>Follow us on</h2>
            <li><a href='e'>About Us</a></li>
            <li><a href='e'>Cookie Notice</a></li>
            <li><a href='e'>Privacy Notice</a></li>
        </div>
        </div>
       
     </div>
    </div>
  )
}

export default footer