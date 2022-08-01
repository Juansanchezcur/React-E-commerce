import './ItemDetail.css';
import Counter from '../Counter/Counter'

const ItemDetail = ({ id, nombre, tipo, imagen, ingredientes, stock, precio}) => {
    return (
        <article className="CardItem">
            <header >
                <h2 className="Nombre">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info Tipo">
                <span>Tipo:</span> {tipo}
                </p>
                <p className="Info Ingredientes">
                <span>Ingredientes:</span> {ingredientes}
                </p>
            </section> 
            <p className=" Info Precio">
            <span>Precio:</span> {precio}
                </p>          
            <footer className='ItemFooter'>
                <Counter stock={stock} />
            </footer>
        </article>
    )
}

export default ItemDetail