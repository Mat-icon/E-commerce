import { CardMedia, Card, CardContent,Button, Typography, CardActions } from '@material-ui/core';
import React from 'react'
import useStyles from './styles'
import './app.scss'
function Cartitem({item, onAddToCartQty, onRemoveFromCart}) {
    const classes = useStyles();
  return (
    <Card className='cardqq' style={{background:'#31302f'}} sm={4} xs={12}>
        <CardMedia  image={item.image.url} alt={item.name} className= {classes.media} />
        <CardContent className={classes.cardContent}>
          <Typography  className='name'>{item.name}</Typography>
          <Typography className='price'>{item.line_total.formatted_with_symbol}</Typography>

        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button type='button' size='small' className='btn' onClick={()=> onAddToCartQty(item.id, item.quantity -1)}>-</Button>
            <Typography className='price'>{item.quantity}</Typography>
            <Button type='button' size='small' className='btn' onClick={()=> onAddToCartQty(item.id, item.quantity +1)}>+</Button>
          </div>
          <Button variant= 'contained'  type='button' className='remove-btn' onClick={()=> onRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
    </Card>
  )
}

export default Cartitem