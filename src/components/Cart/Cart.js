import './Cart.css'
import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart} = useCart()
    return (
        <div>
            <h1>Tu Carrito</h1>
            <div className='carritoListado'>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} className='item'>
                                <div className='itemSection'>
                                    <img src={prod.imagen} className="imgCarrito"/>
                                </div>
                                <div className='itemSection'>
                                    <b>{prod.nombre}</b>
                                </div>
                                <div className='itemSection'>
                                    <p>Cantidad: {prod.cantidad}</p>
                                </div>
                                <div className='itemSection'>
                                    <p>Valor Unitario: ${prod.valor}CLP</p>
                                </div>
                                <div className='itemSection'>
                                    <b>Valor: ${prod.valor*prod.cantidad}CLP</b>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Link to='/checkout'>
                <button>Confirmar</button>
            </Link>
        </div>
    )
}

export default Cart