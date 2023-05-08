import { useState, useEffect } from "react"
import { getProductById } from "../../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {
    let { itemId } = useParams();
    const [product, setProduct ] = useState(false)

    useEffect(()=>{
        console.log(product)
        getProductById(itemId).then( response => {
            setProduct(response)

        }).catch(error =>{
            console.error(error)
        })
    }, [])

    return (
        <div className="container">
        {  
            !product ? (
                <div className="text-center mt-5">
                    <Loading />
                </div>
            ) : (
                <ItemDetail 
                    product = { product}
                />
            )
        }
        </div>
        
    )

}

export default ItemDetailContainer
