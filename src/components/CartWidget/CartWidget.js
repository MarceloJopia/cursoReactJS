import './CartWidget.css'
import cart from './assets/cart.svg'

const CartWidget = ({productosEnCarrito}) => {
    return(
        <div className='flexCart'>
            <div className='borderCart'>
                <b>{productosEnCarrito}</b> 
                <img src={cart} className='cardWidgetIcon'/>
            </div>
        </div>
    )
}

export default CartWidget