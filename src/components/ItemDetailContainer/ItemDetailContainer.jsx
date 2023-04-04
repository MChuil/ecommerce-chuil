import { useState, useEffect } from "react"
import { getProductById } from "../../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct ] = useState(false)
    useEffect(()=>{
        getProductById(1).then( response => {
            console.log("Epa", response)
            setProduct(response)

        }).catch(error =>{
            console.error(error)
        })
    }, [])

    return (
        <div>
        { product &&
            <ItemDetail 
                product = { product}
            />
        }
        </div>
        
    )

}

export default ItemDetailContainer
