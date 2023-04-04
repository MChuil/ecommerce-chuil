import { useState, useEffect } from 'react'
import { getProducts } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then( response => {
      setProducts(response)
    }).catch(error =>{
      console.error(error)
    })
  }, [])
  

  return (
    <div className='pe-3 pt-2 container text-center'>
        <h2 className="my-5">{greeting}</h2>

        { products.length < 1 ? <span className="loader"></span> : '' }

        <ItemList 
          products = {products} 
        />
    </div>
  )
}

export default ItemListContainer
