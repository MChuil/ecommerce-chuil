import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({product}) => {
    const {category, description, id, image, price, rating, title} = product
    return (
        <div>
            <div className="card">
                <img src={image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="h3 text-success">${price}</p>
                    <p className="card-text text-center">Stock disponible: {rating.count}</p>
                </div>
                <Link to={`/detail/${id}`} className="btn btn-primary">Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item
