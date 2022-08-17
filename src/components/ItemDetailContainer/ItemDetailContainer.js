import React from 'react';
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../Services/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId}=useParams()
   

    useEffect(() => {
        getDoc(doc(db, 'productos', productId)).then(response=> {
            const values=response.data()
       const product={id:response.id, ...values}
       setProduct(product)
        })
    },[productId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer