import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Itemcount = ({initial, stock}) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = ()=>{
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const decrement = ()=>{
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }
    const onAdd=(quantity)=>{
        stock -= quantity
        console.log("Cantidad agregada al carrio", quantity)
        console.log("stock", stock)
    }
    
    return (
        <div className="text-center mt-5">
            <div className="d-flex justify-content-center">
                <button className="btn btn-md" onClick={decrement}>
                    <FontAwesomeIcon icon={faMinusSquare} />
                </button>
                <div className="text-center h4">
                    {quantity}
                </div>
                
                <button className="btn btn-md" onClick={increment}>
                    <FontAwesomeIcon icon={faPlusSquare} />
                </button>
            </div>
            <button className="btn btn-success my-3" onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            <p>
                <button className="btn btn-secondary btn-sm mt-5">Volver</button>
            </p>
        </div>
    )
}

export default Itemcount
