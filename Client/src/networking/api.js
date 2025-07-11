export const api = async(limit,skip)=>{
try{
 const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    const data = await res.json()
    return data
}
catch(err)
{
    console.log(err)
    return err
}
}
   