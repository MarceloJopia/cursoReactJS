import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../itemList/itemList"
import {getDocs, collection, query, where} from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])

    const {nombreCategoria} = useParams()
    useEffect(() => {
        const productsRef = nombreCategoria
        ? query(collection(db, 'products'), where('categoria', '==', nombreCategoria))
        : collection(db, 'products')

        getDocs(productsRef)
            .then(snapshot => {
                const productosAdaptados = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productosAdaptados)
            })
    },[nombreCategoria])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer