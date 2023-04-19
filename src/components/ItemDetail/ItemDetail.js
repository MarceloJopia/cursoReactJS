import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const ItemDetail = ({ id, nombre, imagen, categoria, valor, stock }) => {
    
    const {addItem, estaEnElCarrito} = useCart()

    const handleOnAdd = (cantidad) => {
        const productToAdd = {
            id, nombre, imagen, categoria, valor, stock, cantidad
        }
        addItem(productToAdd)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {categoria}
                </p>
                <p className="Info">
                    Precio: {valor} CLP
                </p>
                <p className="Info">
                    Stock Disponible: {stock}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {<ItemCount onAdd={handleOnAdd} stock={stock} />}
            </footer>
        </article>
    )
}

export default ItemDetail