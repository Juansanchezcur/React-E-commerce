import './ItemList.css';
import { Item } from "../Item/Item"


export const ItemList =({products})=>{
   
   return( <div className="productos">{ products.map(product=>(
    <Item product={product} />       
         ))} 
    </div>
    )
}


