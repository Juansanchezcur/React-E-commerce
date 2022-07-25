import { useState} from "react";
import './Counter.css'


const Counter= ({stock} ) =>{

    const [count, setCount] = useState(0)
    


    const addCart = () => {
        if(count==0){
            console.log ("No se pueden agregar 0 productos")   
        }
        else {
            if (count <= stock) {
                console.log ("Productos añadidos al carrito:",count)
                setCount(0) 
            } else {
                console.log ("Stock insuficiente existen "+stock+" productos. ")
            }
        }
    }


    const increment = () => {
        if (count < stock) {
            setCount(count+1)
        }
        
    }


    const decrement = () => {
        if (count > 1) {
            setCount(count-1)
    }
    }

    return (
        <div className="Counter">
            <div>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
            <p>{count}</p>
            <button onClick={addCart}>Añadir al carrito</button>
            
        </div>    
    )




}

export default Counter
