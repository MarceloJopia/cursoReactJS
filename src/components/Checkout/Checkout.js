import './Checkout.css'
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { useState } from "react"
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({username:'', telefono:'', email:'', direccion:'', detalle:''})
    const handleChange = (e) =>{
        const {target:{name,value}}=e
        setDatosForm((datosActuales)=>{
            const datosUsuario = {...datosActuales, [name]:value}
            return datosUsuario
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        crearPedido(datosForm)
    }

    const [idPedido, setIdPedido] = useState()
    const { cart, total, vaciarCarrito} = useCart()
    const crearPedido = async(userData) => {
        try{
            const pedido ={
                comprador: userData,
                items: cart,
                total 
                
            }
            console.log (pedido)
    
            const ids = cart.map(prod => prod.id)
            console.log({ids})
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const docs = await getDocs(productsRef)

            docs.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())
            })
            const batch = writeBatch(db)
            const fueraDeStock = []
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productoAgregadoAlCarrito = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productoAgregadoAlCarrito?.cantidad
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref,{stock: stockDb - prodQuantity})
                } else {
                    fueraDeStock.push({id: doc.id, ...dataDoc})
                }
            });
            if(fueraDeStock.length === 0){
                batch.commit()
                const PedidosRef = collection(db, 'pedidos')
                const PedidoAgregado = await addDoc(PedidosRef, pedido)
                vaciarCarrito()
                setIdPedido(PedidoAgregado.id)
            }
            else{
                // Crear Alerta que avise que no quedan productos
            }
        } catch (error){
            // Crear alerta que avise que la orden no se genero (dejar tranquilo al cliente)
        }
    }

    if(idPedido){
        return(
            <div className='flexBaseFormEnd'>
                <div className="formStyle">
                    <h2>El id de tu Pedido es:{idPedido}</h2>
                    <Link to='/'>
                        <button className='buttonCheckout'>Volver a la tienda</button>
                    </Link>
                </div>
            </div>
        )
    }


    return(
        <div>
            <h1>Checkout</h1>
            <b>Ingrese sus datos</b>
            <article className='flexBaseForm'>
                <form className='formStyle' onSubmit={handleSubmit}>
                    <div className='gridItemForm'>
                        <label className='itemFormLabel'>Nombre y Apellido</label>
                        <input onChange={handleChange} type="text" id="username" name="username" placeholder="Ejemplo: Marcelo Jopia"  value={datosForm.username} required/>
                    </div>
                    <div className='gridItemForm'>
                        <label className='itemFormLabel'>Telefono</label>
                        <input onChange={handleChange} type="tel" id="telefono" name='telefono' placeholder="Ejemplo: +56900000000"  value={datosForm.telefono} required/>
                    </div>
                    <div className='gridItemForm'>
                        <label className='itemFormLabel'>email</label>
                        <input onChange={handleChange} type="email" id="email" name='email' placeholder="Ejemplo: mail@mail.com"  value={datosForm.email} required/>
                    </div>
                    <div className='gridItemForm'>
                        <label className='itemFormLabel'>Direccion</label>
                        <input onChange={handleChange} type="text" id="direccion" name="direccion" placeholder="Ejemplo: Avenida X 105"  value={datosForm.direccion} required/>
                    </div>
                    <div className='gridItemForm'>
                        <label className='itemFormLabel'>Detalle</label>
                        <input onChange={handleChange} type="text" id="detalle" name="detalle" placeholder="Ejemplo: dpto 1, edificio B" value={datosForm.detalle} />
                    </div>
                    <div className='gridItemForm'>
                    <label className='itemFormLabel'>Pais</label>
                        <select>
                            <option value="Chile">Chile</option>
                        </select>
                    </div>
                    <input className='buttonCheckout' type="submit" value={'Confirmar Compra'}/>
                </form>    
            </article>
            
        </div>
    )
}

export default Checkout