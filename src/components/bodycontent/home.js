import React from 'react'
import { NavLink } from 'react-router-dom'
import './app.scss'
import Footer from '../Footer/footer'
import Promo from '../Promo/promo'
import Contact from '../Contact/contact'
function home() {
  return (
    <div className='body'>
    <div className='home'>
      <div className='mini'><p>Dream Creative Stylish</p></div>
      <div className='content'>
        <h1>Find you Perfect Fit <br/><span> With Our Shoes</span></h1>
        <p>A shoe website typically features a variety of content, including<br/> product listings, customer reviews, and information about the company and its policies. <br/>The main focus of the website is likely to be the shoes themselves,
         </p>
         <NavLink to='/product'>
          <button>Explore</button>
         </NavLink>
        
      </div>
    </div>
    <Promo/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default home