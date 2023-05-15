import { getDoc, getFirestore, doc, collection, getDocs, query, where, addDoc, updateDoc } from 'firebase/firestore'

// export const getCategories= () =>{
//     return new Promise((resolve, reject) =>{
//         fetch('https://fakestoreapi.com/products/categories')
//         .then(res=>res.json())
//         .then(json=>  {
//             resolve(json)
//         })
//     }).catch(er=>{
//         reject(er)
//     })
// }

export const getCategory= (category) =>{
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')

    const queryFilter = query(queryCollection, where('category', '==', category))

    return new Promise((resolve, reject) =>{
        getDocs(queryFilter)
        .then(resp => {
            const data = resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))
            resolve(data)
        })

        // fetch(`https://fakestoreapi.com/products/category/${category}`)
        // .then(res=>res.json())
        // .then(json=>  {
        //     resolve(json)
        // })
    }).catch(er=>{
        reject(er)
    })
}


export const getProducts= () =>{
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    return new Promise((resolve, reject) =>{
        getDocs(queryCollection)
            .then(resp => {
                const data = resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))
                resolve(data)
            })
    //     fetch('https://fakestoreapi.com/products')
    //     .then(res=>res.json())
    //     .then(json=>  {
    //         resolve(json)
    //     })
    }).catch(er=>{
        reject(er)
    })
}

export const getProductById = (productId)=>{
    const db = getFirestore()
    const queryDoc = doc(db, 'productos', productId)
    return new Promise((resolve, reject)=>{
        getDoc(queryDoc)
        .then( resp => {
            const data = { id: resp.id, ...resp.data() }
            resolve(data)
        })
    //fetch(`https://fakestoreapi.com/products/${productId}`)
    //         .then(res=>res.json())
    //         .then(json=> {
    //             resolve(json)
    //         })
    }).catch( er=> reject(er))
}


export const createOrder = async (order) => {
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    return addDoc(queryCollection, order)
        .then(resp => {
            order.items.map(async item =>{
                const producto = await getProductById(item.id)
                const queryDoc = doc(db, 'productos', item.id)
                const newQuantity = producto.rating - item.quiantity
                await updateDoc(queryDoc, {
                    rating: newQuantity
                })
            })
            return resp.id
        }).catch(err=> console.log(err))
}