export const getProducts= () =>{
    return new Promise((resolve, reject) =>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>  {
            resolve(json)
        })
    }).catch(er=>{
        reject(er)
    })
}

export const getProductById = (productId)=>{
    return new Promise((resolve, reject)=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=> {
                resolve(json)
            })
    }).catch( er=> reject(er))
}