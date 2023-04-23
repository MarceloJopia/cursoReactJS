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
            <div className='imgContainer'>
                <img src={imagen} alt={nombre} className="itemImg"/>
            </div>
            <div>
                <div className='datosProductos'>
                    <div>
                        <h1 className="tituloProducto">
                            {nombre}
                        </h1>
                    </div>
                    <div className='infoProducto'>
                        <p className="info">
                            Categoria: {categoria}
                        </p>
                    </div>
                    <div className='infoProducto'>
                        <p className="info">
                            Precio: {valor} CLP
                        </p>
                        </div>
                    <div className='infoProducto'>
                        <p className="info">
                            Stock Disponible: {stock}
                        </p>
                    </div>   
                </div>        
                <div className='countFlex'>
                    {<ItemCount onAdd={handleOnAdd} stock={stock} currentItemId={id}/>}
                </div>
            </div>
        </article>
    )
}

export default ItemDetail