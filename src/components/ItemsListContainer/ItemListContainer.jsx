import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'

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
        <h2>{greeting}</h2>
        <ItemList 
          products = {products} 
        />
    </div>
  )
}

export default ItemListContainer
