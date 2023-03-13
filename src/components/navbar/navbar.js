import React from 'react'
import './app.scss'
import Logo from '../../assests/logo.png'
import { IconButton, Badge } from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import { NavLink, useLocation } from 'react-router-dom'
function Navbar({basketItems}) {
  const location = useLocation();

  
  return (
    <div className='nav-bar'>
       <div className='nav-details'>
        <div className='logo'><img alt='logo' src={Logo} className='logo-img'/>FlexFyre</div>
        {location.pathname === '/product' && (
           <div className='nav-links'>
           <NavLink  to='/cart'>
         <IconButton aria-label="show cart items" >
     <Badge badgeContent={basketItems} color="secondary">
       <ShoppingCart  className='cart-color'/>
     </Badge>
   </IconButton>
         </NavLink> 
           </div>
       )}
        
       </div>
    </div>
  )
}

export default Navbar