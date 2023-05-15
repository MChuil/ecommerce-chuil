import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../context/CartContext'

const CartWidgets = () => {
  const { quantityTotal } = useCartContext()
  return (
    <div>
        <Link to='/cart' className="btn btn-primary position-relative">
            <FontAwesomeIcon icon={faCartPlus} />
            {
              (quantityTotal()>0)&&(
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    { quantityTotal() }
                </span>
              )
            }
        </Link>
    </div>
  )
}

export default CartWidgets
