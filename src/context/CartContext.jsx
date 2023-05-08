import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

//propio hook
export const useCartContext = ()=> useContext(CartContext)

export const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])

    const addToCart= (newProduct)=>{
        setCartList([
            ...cartList, newProduct
        ])
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


    //Limpiar carrito
    const clearCart = ()=>{
        setCartList([])
    }


    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            priceTotal,
            quantityTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}