import React from 'react'
import { Grid} from '@material-ui/core'
import Product from './components/products/product'
import './components/products/app.scss'
function Products ({products, addProduct, basketItems}) {
  console.log("products", " ", products);
  return ( 
    <div className='section-one'>
    <h3>Recent Releases</h3>
    
   <main className='grid2'> 
   <Grid container justifyContent='center' spacing={1} overlap='rectangular' >
          {products.map((product)=> (
            <Grid item key={product.id} xs={12} sm={6} lg={4}>
               <Product product={product} addProduct = {addProduct} basketItems={basketItems}/>
            </Grid>    
      ))}
        </Grid>
  

    </main>
 </div>

  )
}

export default Products