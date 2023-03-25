export const getProducts= () =>{
    return new Promise((resolve, reject) =>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>  {
            console.log(json)
            resolve(json)
        })

        fetch
    }).catch(er=>{
        reject(er)
    })
}