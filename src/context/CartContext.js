import { createContext, useState, useContext } from 'react';

export const CartContext = createContext('initial value')

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!estaEnElCarrito(productToAdd.id)){
            setCart(prev => [...prev, productToAdd])
        }
        else{
            setCart(prevCart => {
                return prevCart.map(product=>{
                    if(product.id == productToAdd.id){
                        return {...product, cantidad:product.cantidad+productToAdd.cantidad}
                    }
                    else{
                        return product
                    }
                })
            })
        }
    }

    const estaEnElCarrito = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const quitarProducto = (id) => {
        const actualizarCarrito = cart.filter(prod => prod.id !== id)
        setCart(actualizarCarrito)
    }

    const cantidadTotalProductos = () => {
        let cantidadTotal = 0
        cart.forEach(prod=>{
            cantidadTotal += prod.cantidad
        })
        return cantidadTotal
    }

    const cantidadTotal = cantidadTotalProductos()

    const total = 'crear funcion que sume el valor total del carrito'

    const vaciarCarrito = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, addItem, cantidadTotal, quitarProducto, estaEnElCarrito, total, vaciarCarrito}}>    
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    return useContext(CartContext)
}