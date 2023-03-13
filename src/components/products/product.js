import React from 'react'
import './app.scss'
import { Card, CardMedia,Badge,IconButton,Button, Typography, CardActions, CardContent} from '@material-ui/core'
import useStyles from './styles'

function Product({product, basketItems, totalCost, addProduct}) {
  const classes = useStyles();
  return (
    <> 
    <Card className='card' style={{background:'#31302f'}}>
      <CardMedia className={classes.media}  image= {product.image.url}  title= {product.name} />
      <CardContent style={{background:'#31302f'}}>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom className='name'>
           {product.name}
          </Typography>
          <Typography variant='h5' gutterBottom  className='price'>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>
          <Button variant= 'contained'  type='button' className='remove-btn' onClick={()=> addProduct(product.id)} >Add to Cart</Button>
    </Card>

   </>
  )
}

export default Product