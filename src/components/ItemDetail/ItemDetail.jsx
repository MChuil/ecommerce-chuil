import Itemcount from '../ItemCount/Itemcount'
import './ItemDetail.css'
const ItemDetail = ({product}) => {

    const {category, description, id, image, price, rating, title} = product

    return (
        <div className="row border m-5">
            <div className="col-12 d-flex justify-content-between align-items-center">
                <img src={image} className='img-product m-5'/>
                <div className="card-body  flex-grow-1">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Categoria: {  }</h6>
                    <p className="h3 text-success">${price}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text text-center">Stock disponible: {rating.count}</p>
                    <Itemcount 
                        initial = {1}
                        stock = {rating.count}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
