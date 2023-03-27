import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../itemList/itemList"

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])

    const {nombreCategoria} = useParams()
    useEffect(() => {
        const asyncFuntion = nombreCategoria ? getProductsByCategory : getProducts

        asyncFuntion(nombreCategoria)
            .then(products => {
                setProducts(products)
            })
            .catch(error =>{
                console.log(error)
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