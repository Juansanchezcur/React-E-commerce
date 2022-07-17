import './Navbar.css'
import logo from '../Images/logo.png'

const Navbar = () =>{
return(
 <nav>
    <div className="burgerHouse"> <img src={logo} alt="Logo" />
        BurgerHouse
    </div>
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