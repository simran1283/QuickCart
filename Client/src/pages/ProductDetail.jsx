import { useParams } from "react-router-dom"
import { Header } from "../components/Navbar"
import { useEffect, useState } from "react"
import { ProductCard } from "../components/ProductCard"

export const ProductDetail = ()=>{
     const {id} = useParams()
    const [productdetail,setProductdetail] =useState(null)

    const fetchdetail = async(id)=>{
        try{
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        setProductdetail(data)
        }catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{
        fetchdetail(id)
    },[id])
    return(
        <>
        {console.log(productdetail)}
        <Header/>
        {productdetail && <ProductCard data={productdetail}/>}
        </>
    )
}