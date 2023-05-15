import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

//propio hook
export const useCartContext = ()=> useContext(CartContext)

export const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])

    const addToCart= (newProduct)=>{
        const indexProduct = cartList.findIndex(product => product.id === newProduct.id)  //  -1
        if (indexProduct === -1 ) {
            setCartList([
                ...cartList,
                newProduct
            ])              
        } else {
            cartList[indexProduct].quiantity += newProduct.quiantity
            setCartList( [ ...cartList ] )
        }
    }

    //Cantidad total de productos
    const quantityTotal = ()=>{
        return cartList.reduce((total, objProduct) => total+= objProduct.quiantity,0)
    }

    //precio total de productos
    const priceTotal = ()=>{
        const total = cartList.reduce((totalPrice, objProduct) => totalPrice+= (objProduct.price * objProduct.quiantity),0)
        return total.toFixed(2)
    }

    //Eliminar por item
    const deleteProduct = (id)=>{
        const cartUpdated = cartList.filter(product => product.id != id)
        setCartList(cartUpdated)
    }   

    //Limpiar carrito
    const clearCart = ()=>{
        setCartList([])
    }


    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            deleteProduct,
            priceTotal,
            quantityTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}