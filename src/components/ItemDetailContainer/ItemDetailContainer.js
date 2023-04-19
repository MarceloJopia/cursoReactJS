import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { itemId } = useParams()


    useEffect(() => {
        const productsRef = doc(db, 'products', itemId)
        getDoc(productsRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productosAdaptados = {id: snapshot.id, ...data}
                setProduct(productosAdaptados)
            })

        // getProductById(itemId).then(response => {
        //     setProduct(response)
        // }).catch(error => {
        //     console.log(error)})
    }, [itemId])


    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer