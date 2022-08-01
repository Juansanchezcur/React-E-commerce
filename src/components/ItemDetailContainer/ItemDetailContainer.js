import './ItemDetailContainer.css';
import { useState, useEffect } from 'react'
import { getProduct } from '../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

   

    useEffect(() => {
        getProduct().then(response => {
            setProduct(response)
        })
    },[] )

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer