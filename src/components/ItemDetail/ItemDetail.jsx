import {useState } from 'react'
import { Link } from 'react-router-dom'
import Itemcount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'
import './ItemDetail.css'


const ItemDetail = ({product}) => {

    const { addToCart } = useCartContext()
    const {category, description, id, image, price, rating, title} = product
    
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd=(quan)=>{
        setQuantityAdded(quan)
        addToCart({...product, quiantity: quan})
    }
    
    return (
        <div className="row border m-5">
            <div className="col-12 d-flex justify-content-between align-items-center">
                <img src={image} className='img-product m-5'/>
                <div className="card-body  flex-grow-1">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Categoria: { category }</h6>
                    <p className="h3 text-success">${price}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text text-center">Stock disponible: {rating}</p>
                    {
                        quantityAdded > 0 ?(
                            <>
                                <p className="text-center mt-5"><Link to='/cart' className="btn btn-primary my-3">Terminar compra</Link></p>
                                <p className="text-center"><Link to='/' className="btn btn-secondary">Seguir comprando</Link></p>
                            </>
                        ) : (
                            <Itemcount 
                                initial = {1}
                                stock = {rating}
                                onAdd= {handleOnAdd}
                            />
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
