import React from 'react';
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () =>{
   
   const { getCartQuantity } = useContext(CartContext)
   const quantity = getCartQuantity()
return (
     <div className="divCart">
       {quantity}
        <img src='cart.svg' className="cart" alt="Cart"/>

     </div>   


    )
}

export default CartWidget