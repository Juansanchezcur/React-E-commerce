import React from 'react';
import './Navbar.css'
import logo from '../Images/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



const Navbar = () =>{
    const { getCartQuantity } = useContext(CartContext)
    const quantity = getCartQuantity()
    
return(
 <nav>
    <div className="burgerHouse"> 
        <img src={logo} className="logo" alt="Logo" />
        BurgerHouse
    </div>
    {quantity !==0?<Link  to={`/cart`}><CartWidget/></Link>:<CartWidget/>}
    <div>
        <p className="Filtros">Filtros: </p>
        <Link  to={`/`}>Todos los productos</Link>
        <Link  to={`/category/Hamburguesas`}>Hamburguesas</Link>
        <Link  to={`/category/Pizzas`}>Pizzas</Link>
    </div>
 </nav>

)

}

export default Navbar