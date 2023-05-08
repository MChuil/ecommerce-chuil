import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCategory, getProducts } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'

const ItemListContainer = ({greeting}) => {
  let {categoryId}= useParams();
 
  const [products, setProducts] = useState([])
  const [title, setTitle] = useState([])

  useEffect(() => {
    (categoryId) ? setTitle(`Categoria: ${categoryId}`) : setTitle(greeting)
    const asyncFunc = categoryId ? getCategory : getProducts

    asyncFunc(categoryId).then(response=>{
      setProducts(response)
    })

  }, [categoryId])
  


  return (
    
      <div className='pe-3 pt-2 container text-center'>
          <h2 className="my-5 mx-3 text-uppercase text-start">{title}</h2>

          { 
            products.length < 1 ? (
              <Loading />
            ) : ( 
              <ItemList 
                products = {products} 
              />
            )
          }

      </div>

  )
}

export default ItemListContainer
