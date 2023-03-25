import React from 'react'
import './Item.css'
import Itemcount from '../ItemCount/Itemcount'
const Item = ({product}) => {
    const {category, description, id, image, price, rating, title} = product
    return (
        <div>
            <div className="card">
                <img src={image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Categoria: {category}</h6>
                    <p className="card-text">{description}</p>
                    <p className="h3 text-success">${price}</p>
                    <Itemcount
                        initial = {1}
                        stock = {rating.count}
                    />
                </div>
            </div>
        </div>
    )
}

export default Item
