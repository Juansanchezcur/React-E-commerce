import './Navbar.css'
import logo from '../Images/logo.png'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () =>{
return(
 <nav>
    <div className="burgerHouse"> 
        <img src={logo} className="logo" alt="Logo" />
        BurgerHouse
    </div>
   <CartWidget/>
    <div>
        <button>Inicio</button>
        <button>Nosotros</button>
        <button>Productos</button>
        <button>Promociones</button>
        <button>Hace un Pedido</button>
    </div>
 </nav>

)

}

export default Navbar