import React from 'react'
import Item from '../Item/Item'
const ItemList = ({products}) => {
    return (
    <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
            {products.map(prod => <Item key={prod.id} product = {prod} />)}
        </div>
    </div>
    )
}

export default ItemList
