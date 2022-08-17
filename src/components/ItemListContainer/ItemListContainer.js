import React from 'react';
import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../Services/firebase/index'

const ItemListContainer= (props) =>{

    const [products, setProducts]= useState([])
    const {categoryId}=useParams()
   
    
    useEffect(()=>{
        
        const collectionReference = !categoryId
        ? collection(db, 'productos')
        : query(collection(db, 'productos'), where('tipo', '==', categoryId))  
        
        getDocs(collectionReference).then(response=>{
            const productosDB = response.docs.map(doc =>{
                return {id:doc.id, ...doc.data()}
            })
            setProducts(productosDB)
        })
        

    },[categoryId] )

     
    
    
    return(
        <>
             <h1>{props.greeting}</h1>
          <ItemList products={products} />
        </>
    )

}

export default ItemListContainer