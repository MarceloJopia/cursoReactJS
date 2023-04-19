import './Item.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Item = ({id, nombre, valor, stock, imagen}) => {

    // const value = useContext(CartContext)
    // const navigate = useNavigate()

    const controlarEventoClick = (event) =>{
        event.stopPropagation()
    }

    return(
        <div className="cardProducto" onClick={controlarEventoClick}>
            <p className='productTitle'>{nombre}</p>
            <img src={imagen} className='cardImage'/>
            <p>Precio: ${valor} CLP</p>
            <p>Stock Disponible: {stock}</p>
            <Link to={`/item/${id}`} className='detalle'>Ver detalle</Link>
        </div>
    )
}

export default Item