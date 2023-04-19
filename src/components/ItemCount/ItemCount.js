import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   const handleChange = (e) => {
        e.target.value > stock ? setQuantity(stock) : setQuantity(e.target.value)
        if (e.target.value < 1) setQuantity(1)
   }

   return(
       <div className='Counter'>          
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <input onChange={handleChange} type='number' className='Number' value={quantity}/>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount