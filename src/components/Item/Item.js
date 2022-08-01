import './Item.css';

export const Item=({product})=>{
    return(
        <div key={product.id}>
            <h3>{product.nombre}</h3>
            <img src={product.imagen} className="productoImg" alt="Producto" />
            <p>${product.precio}</p>  
        </div> 

    )


}

