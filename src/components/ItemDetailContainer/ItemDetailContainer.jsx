import { useState, useEffect } from "react"
import { getProductById } from "../../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    let { itemId } = useParams();
    const [product, setProduct ] = useState(false)

    useEffect(()=>{
        getProductById(itemId).then( response => {
            setProduct(response)

        }).catch(error =>{
            console.error(error)
        })
    }, [])

    return (
        <div className="container">
        { product &&
            <ItemDetail 
                product = { product}
            />
        }
        </div>
        
    )

}

export default ItemDetailContainer
