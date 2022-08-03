import React from 'react';
import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../asyncMock';
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer= (props) =>{

    const [products, setProducts]= useState([])
    const {categoryId}=useParams()
    const asyncFunction= categoryId?getProductsByCategory : getProducts
    
    useEffect(()=>{
        
            asyncFunction(categoryId).then(response=>{
                setProducts(response)})
            
        
        
        

    },[categoryId] )

     
    
    
    return(
        <>
             <h1>{props.greeting}</h1>
          <ItemList products={products} />
        </>
    )

}

export default ItemListContainer