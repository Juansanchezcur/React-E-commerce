import React from 'react';
import { useState} from "react";
import './ItemCount.css'

const ItemCounter= ({stock, onAdd} ) =>{
    
    const [quantity, setQuantity] = useState(0)   
   

    const increment = () => {
        if (quantity < stock) {
            setQuantity(prev => prev +1)
        }
        
    }


    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev -1)
    }
    }

    return (
        <div className="Counter">
            <div>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
            <p>{quantity}</p>
            <button onClick={() => onAdd(quantity)}>Añadir al carrito</button> 
        </div>    
    )




}

export default ItemCounter
