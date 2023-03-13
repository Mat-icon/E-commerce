import React from 'react'
import './app.scss'
import men from '../../assests/Men.png'
import women from '../../assests/pngegg.png'
function category() {
  return (
    <div className='categories'>
        <div className='category-title'>
            Category
        </div>
        <div className='box'>
            <p>Men</p>
            <img src={men} alt='men' className='men'/>
        </div>
        <div className='box'>
            <p>Women</p>
            <img src={women} alt='men' className='women'/>
        </div>
       
    </div>
  )
}

export default category