import { useCartContext } from "../../context/CartContext"
import "./CartContainer.css";

const CartContainer = () => {
    const {cartList, clearCart, priceTotal} = useCartContext()
    return (
        <div className="row m-5">
            <div className="col-12 col-md-6 offset-md-3 border">
                <h1 className="text-center mt-5">Mi carrito</h1>
                {
                    cartList.map( product => (
                        <li key={product.id} className="d-flex justify-content-between align-items-center">
                            <img src={product.image} className='img-product m-5'/>
                            <div>
                                <p><strong>Nombre:</strong> {product.title}</p>
                                <p><strong>Cantidad:</strong>  {product.quiantity}</p>
                                <p><strong>Precio:</strong> {product.price}</p>
                            </div>
                            <button className="btn btn-danger">X</button>
                        </li>
                    ))
                }
                <p className="h4 text-center">Total de compra: {priceTotal()}</p>
                {
                    (cartList.length>0) ? (
                        <p>
                            <button className="btn btn-danger" onClick={()=>clearCart()}>Vaciar carrito</button>
                        </p>
                    ): null
                }
                
            </div>
        </div>
    )
}

export default CartContainer