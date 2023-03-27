import Item from "../Item/Item"
import './itemList.css'

const ItemList = ({products}) => {
    return(
        <div className="flexCardList">
            {products.map(product => <Item key={product.id} {...product}/>
            )}
        </div>
    )
}

export default ItemList