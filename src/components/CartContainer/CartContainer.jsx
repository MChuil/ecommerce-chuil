import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import "./CartContainer.css";
import { createOrder } from '../../../asyncMock'

const CartContainer = () => {
    const [ id, setId] = useState(null)

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const { cartList, clearCart, deleteProduct,  priceTotal } = useCartContext()

    const handleOnChange =(event)=>{
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const order = {
            buyer: formData,
            items: cartList.map(({id, title, price, quiantity})=> ({id, title, price, quiantity})),
            total: priceTotal()
        }
        console.log('Orden', order)
        createOrder(order).then(resp => {
            setId(resp)
            clearCart()
        }).catch(er=>console.log(er))
    }

    return (
        <div className="row m-5">
            {
                (id != null) ? 
                <div className="col-12 col-md-6 offset-md-3 border py-5">
                    <div className="mx-auto text-center">
                        <h2>Gracias por su compra</h2>
                        <p>Su pedido es el numero: <strong>{id}</strong></p>
                    </div>
                    <p className="text-center"><Link to='/' className="btn btn-primary">Ir al inicio</Link></p>
                </div>

                : 

                <div className="col-12 col-md-6 offset-md-3 border py-5">
                {
                    cartList.length === 0 ?
                        <div className="mx-auto text-center">
                            <h2>No hay productos</h2>
                            <Link to="/">Ir a productos</Link>
                        </div>
                    :
                        <div>
                            <h1 className="text-center mt-5">Mi carrito</h1>
                            { cartList.map( product => (
                                    <li key={product.id} className="d-flex justify-content-between align-items-center">
                                        <img src={product.image} className='img-product m-5'/>
                                        <div>
                                            <p><strong>Nombre:</strong> {product.title}</p>
                                            <p><strong>Cantidad:</strong>  {product.quiantity}</p>
                                            <p><strong>Precio:</strong> {product.price}</p>
                                        </div>
                                        <button className="btn btn-danger" onClick={()=>deleteProduct(product.id) }>X</button>
                                    </li>
                                ))
                            }
                            
                            <div className="card mx-auto">
                                <div className="card-body">
                                    <p className="h3 text-center">Total de compra: {priceTotal()}</p>
                                    <form  onSubmit={handleSubmit} className="mt-5 d-grid gap-3">
                                        <p>Para finalizar su compra, llene todos los campos.</p>
                                        <input                         
                                            type="text"
                                            name="name"
                                            placeholder="Ingrese su nombre" 
                                            className="form-control"
                                            value = {formData.name}
                                            onChange={handleOnChange}
                                        />
                                        <input                         
                                            type="text"
                                            name="phone"
                                            placeholder="ingrese el teléfono"
                                            onChange={handleOnChange}
                                            value={formData.phone}
                                            className="form-control"
                                        />
                                        <input                         
                                            type="text"
                                            name="email"
                                            placeholder="ingrese el mail"
                                            onChange={handleOnChange}
                                            value={formData.email}
                                            className="form-control"
                                        />
                                        <input                         
                                            type="text"
                                            name="repetirMail"
                                            placeholder="repetir el mail "
                                            // value={''}
                                            className="form-control"
                                        />
                                        <a className="btn btn-danger" onClick={()=>clearCart()}>Vaciar carrito</a> <button className="btn btn-primary" >Generar Orden</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                }
                </div>
            }
            
        </div>
    )
}

export default CartContainer