import Itemcount from '../ItemCount/Itemcount'

const ItemDetail = ({product}) => {
    
    const {category, description, id, image, price, rating, title} = product

    return (
        <div>
            <div className="card">
                <img src={image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Categoria: {  }</h6>
                    <p className="h3 text-success">${price}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text text-center">Stock disponible: {rating.count}</p>
                </div>
                <Itemcount 
                    initial = {1}
                    stock = {rating.count}
                />
            </div>
        </div>
    )
}

export default ItemDetail
