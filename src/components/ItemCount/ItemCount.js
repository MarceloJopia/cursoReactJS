import './ItemCount.css'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'


const ItemCount = ({stock = 0, onAdd, currentItemId})=> {
    const {cart} = useCart()
    const [quantity, setQuantity] = useState(cart.find(product=>product.id==currentItemId)?.cantidad || 0)
    const increment = () => {
        console.log(quantity)
        if(quantity < stock) {
            setQuantity(quantity+1)

        }
    }

    const decrement = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }     
    }

    const handleChange = (e) => {
        console.log(e.target)
            e.target.value > stock ? setQuantity(stock) : setQuantity(parseInt(e.target.value))
            if (e.target.value < 1) setQuantity(0)
    }

   return(
       <div className='contador'>          
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <input onChange={handleChange} type='number' className='Number' value={quantity}/>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="addButton" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount