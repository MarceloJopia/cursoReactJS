import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, valor, stock, imagen}) => {

    return(
        <div className="cardProducto">
            <p className='productTitle'>{nombre}</p>
            <img src={imagen} className='cardImage'/>
            <p>Precio: ${valor} CLP</p>
            <p>Stock Disponible: {stock}</p>
            <Link to={`/item/${id}`} className='detalle'>Ver detalle</Link>
        </div>
    )
}

export default Item