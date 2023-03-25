import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const CartWidgets = () => {
  return (
    <div>
        <button type="button" className="btn btn-primary position-relative">
            <FontAwesomeIcon icon={faCartPlus} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
            </span>
        </button>
    </div>
  )
}

export default CartWidgets
