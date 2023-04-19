import './CartWidget.css'
import cart from './assets/cart.svg'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = ({productosEnCarrito}) => {

    const {cantidadTotal} = useCart()

    return(
        <div className='flexCart'>
            <Link to='/cart'>
                <div className='borderCart'>
                    <b className='boldStyle'>{cantidadTotal}</b>
                    <img src={cart} className='cardWidgetIcon'/>
                </div>
            </Link>
        </div>
    )
}

export default CartWidget