import { Typography, Grid, Button } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';
import './app.scss'
import Cartitem from './cartItems/Cartitem';
import useStyles from './styles'

function Cart({cart, handleRemoveFromCart,handleEmptyCart,handleAddToCartQty}) {
  console.log("cart", " ", cart);
  const classes = useStyles();
  
  const EmptyCart = ()=>{
    return (
    <Typography variant='subtitle1' className='grid3 cart-empty'>You have no items in your Shopping Cart!
    <NavLink to='/product' className={classes.link}><br/>Start Adding Some</NavLink>
    </Typography>
    )
  }

  const FilledCart= ()=>{
    return(
      <>
        <Grid container  className='grid3' overlap='rectangular'>
          {cart.line_items.map((item)=> (
            <Grid key={item.id}spacing={4} sm={4} xs={12}>
              <Cartitem item = {item} onRemoveFromCart={handleRemoveFromCart} onAddToCartQty={handleAddToCartQty} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <div>
        <Button className='emptybutton' onClick={handleEmptyCart}>Empty Cart</Button>
        <Button component ={NavLink} to='/checkout' className='checkout'>Checkout</Button> 
        </div> 
       <Typography className='subtotal' variant='h5'>Subtotal : {cart.subtotal && cart.subtotal.formatted_with_symbol}</Typography>
        </div>
      </>
    )
  }

  if(!cart.line_items) return 'Loading...'
  return (
    <div className='container-sec' >
      <div className='sec'>
        <Typography className= 'cart-title' >Your Shopping Cart</Typography>
        {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
      </div>

    </div>
  )
}


export default Cart