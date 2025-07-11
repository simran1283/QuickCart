import { useEffect, useState } from "react"
import { api } from "../networking/api"
import { Carditem } from "../components/CartItem"
import { ClipLoader } from "react-spinners"
import {Header} from "../components/Navbar"
import InfiniteScroll from "react-infinite-scroll-component"
export const ProductList = () => {

    const [product, setProduct] = useState([])
    const [load, setLoad] = useState(true)
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const limit = 10

    const fetchdata = async () => {
        api(limit, skip)
            .then(res => {
                if (res.products.length == 0) {
                    setMore(false)
                    return
                }
                setProduct((prev) => [...prev, ...res.products])
                setSkip((prev) => prev + limit)
                setLoad(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <>
        <Header/>
            {product.length == 0 ? <ClipLoader loading={load} size={150} cssOverride={{
                display: "flex",
                margin: "25% auto",
                justifyContent: "center",
                alignItems: "center"
            }} /> : <InfiniteScroll
                dataLength={product.length}
                next={fetchdata}
                hasMore={more}
                loader={<ClipLoader loading={load} size={150} cssOverride={{
                    display: "flex",
                    margin: "0% 25%",
                    justifyContent: "center",
                }} />}
            >
                <Carditem data={product} />
                </InfiniteScroll>}

            
        </>
    )
}