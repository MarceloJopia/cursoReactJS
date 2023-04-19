import { useCart } from "../../context/CartContext"

const Checkout = () => {
    const { cart, total} = useCart()
    const crearPedido = (userData) => {
        const Pedido ={
            items: cart,
            total
        }
    }

    return(
        <div>
            <h1>Checkout</h1>
            <b>Ingrese sus datos</b>
            {/* <Form onConfirm={crearPedido}/> */}
            <button onClick={crearPedido}>Confirmar Compra</button>
        </div>
    )
}

export default Checkout