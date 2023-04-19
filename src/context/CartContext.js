import { createContext, useState, useContext } from 'react';

export const CartContext = createContext('initial value')

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!estaEnElCarrito(productToAdd.id)){
            setCart(prev => [...prev, productToAdd])
        }
        else{
            const indexProductoRepetido = estaEnElCarrito(productToAdd.id)
            cart[indexProductoRepetido]={...cart[indexProductoRepetido],}
            setCart(prev => [...prev, productToAdd])
        }
    }

    const estaEnElCarrito = (id) => {
        return cart.findIndex(prod => prod.id === id)
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

    return(
        <CartContext.Provider value={{cart, addItem, cantidadTotal, quitarProducto, estaEnElCarrito}}>    
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}