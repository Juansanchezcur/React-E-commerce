import './ItemListContainer.css';
import { getProducts } from '../asyncMock';
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';


const ItemListContainer= (props) =>{

    const [products, setProducts]= useState([])

    useEffect(()=>{
        getProducts().then(response=>{
            setProducts(response)
        })

    },[])

     
    
    
    return(
        <>
             <h1>{props.greeting}</h1>
          <ItemList products={products} />
        </>
    )

}

export default ItemListContainer