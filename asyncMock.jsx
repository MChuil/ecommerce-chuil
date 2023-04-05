export const getCategories= () =>{
    return new Promise((resolve, reject) =>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>  {
            resolve(json)
        })
    }).catch(er=>{
        reject(er)
    })
}

export const getCategory= (category) =>{
    return new Promise((resolve, reject) =>{
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res=>res.json())
        .then(json=>  {
            console.log(json)
            resolve(json)
        })
    }).catch(er=>{
        reject(er)
    })
}



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