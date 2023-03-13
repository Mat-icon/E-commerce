import React, { useEffect, useState } from 'react'
import './app.scss'
import Navbar from '../navbar/navbar'
import Bodycontent from '../bodycontent/home'
import { commerce } from '../../lib/commerce'
import Product from '../../products'
import Cart from '../cart/cart'
import Checkout from '../CheckoutForm/Checkout/Checkout'
import { Route, Routes} from 'react-router-dom'

function Hero() {
  const [products, setProducts] = useState([]);
  const [basketData, setBasketData] = useState({});

 

  const fetchProducts = async() => {
    const {data} = await commerce.products.list().catch((err) => console.log(err));

    setProducts(data);
      console.log("hero", " ", products);
  }

 

  const fetchCart = async() => {
    const cart = await commerce.cart.retrieve().catch((err) => console.log(err));
    setBasketData(cart)
      console.log("hero", " ",basketData);
  }
 

  useEffect(()=> {
    fetchProducts();
    fetchCart();
  }, []);
 
  const addProduct= async(productId,quantity)=>{
     const response = await commerce.cart.add(productId,quantity);
     setBasketData(response);
  }

  const handleAddToCartQty = async(productId, quantity) => {
    const {basketData} = await commerce.cart.update(productId, {quantity});

    setBasketData(basketData)
  }

  const handleRemoveFromCart = async (productId) =>{
    const {basketData} = await commerce.cart.remove(productId);

    setBasketData(basketData);
  }

  const handleEmptyCart = async() => {
    const {basketData} = await commerce.cart.empty();
    setBasketData(basketData)
  }





  return (
    <> 
     <Navbar basketItems ={basketData.total_items}/>
     <Routes>
       <Route path="/" element={<Bodycontent/>}/>
        <Route path="/product" element={ <Product  products={products} addProduct={addProduct}/>}/>
        <Route path="/cart" element={<Cart cart={basketData}  
        handleRemoveFromCart = { handleRemoveFromCart }
        handleAddToCartQty= {handleAddToCartQty}
        handleEmptyCart = {handleEmptyCart}
        />}
        />
        {/* <Route path="/checkout" element={<Checkout cart={basketData}/>}/> */}
     </Routes>
  
    </>
    
  )
}

export default Hero