import React from 'react'
import './promo.scss'
import Nike from '../../assests/whiteair.png'
function promo() {
  return (
    <div className='section-two'>
    <div className='container'>
    <div className='hero'>
      <div className='promo'>
        <h1>New Year <br/><span className='sale'>SALE</span><br/><span className='date'>01-15 January</span></h1>
      </div>
    
      <div className='attention'>
        <h1>Everything <br/> Must Go</h1>
        <div className='coupon'>
        <p>Save 30% Off All <br/> Footwears</p>
      </div>
      </div>
      
       </div> 
      <img src={Nike}  alt='' className='nike'/>
      <div className='circle'></div>
    </div>
    </div>
  )
}

export default promo