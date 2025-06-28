import { useEffect, useState } from "react"
import { Header } from "../components/Navbar"
import { useSelector } from "react-redux"
import { Card, Button } from "react-bootstrap"
import { Badge } from "react-bootstrap"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import { remove } from "../redux/cartSlice"
export const Cart = () => {
    const items = useSelector((state) => state.cart.items)
    const [cart, setCart] = useState([])

    useEffect(() => {
        Promise.all(items.map((id) => fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())))
            .then((data) => {
                console.log(data)
                setCart(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [items])
    const dispatch =useDispatch()
    const delCart = (id)=>{
        dispatch(remove(id))
    }
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal += cart[i].price;
    }

    return (
        <>
            <Header />
            {cart.length == 0 ? <p className="text-light-emphasis" style={{textAlign :"center"}}>It feels so light!!</p>: 
            <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa",overflow :"hidden" }} className="d-flex flex-row justify-content-between ">
                <div className="h-100 w-100">
                    <h2 className="mx-4 my-4">Shopping Cart</h2>
                    <div style={{ height: "85vh", overflowY: "auto", scrollbarWidth: "none" }}>
                        {cart.map((item) => (
                            <Card key= {item.id} className="d-flex flex-row justify-content-between align-items-center px-1 mx-3 my-3" style={{ height: "180px" }}>
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <div className="me-5">
                                        <Card.Img src={item.thumbnail} style={{ width: "120px", height: "160px", objectFit: "contain" }}></Card.Img>
                                    </div>
                                    <div>
                                        <Card.Body>
                                            <Card.Title className="fw-bold my-1">{item.title}</Card.Title>
                                            <Card.Text className="fw-semibold text-light-emphasis fs-5 my-1">{item.brand}</Card.Text>
                                            <Card.Text className="fw-bold fs-5 my-1" style={{ color: "red" }}>${item.price}<Badge bg="warning" text="black" className="fs-6 ms-4">{item.discountPercentage}% oFF</Badge></Card.Text>
                                            <Card.Text>{item.availabilityStatus}</Card.Text>
                                        </Card.Body>
                                    </div>
                                </div>
                                <div className="d-flex flex-row ms-auto me-3">
                                    <Button variant="outline-danger" onClick={()=>{delCart(item.id)}}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="w-50 h-40">
                    <Card className="my-3 mx-3 px-3 py-3">
                        <Card.Title className="mb-4 fw-semibold">Subtotal ({cart.length} items): <span className="fw-bold" style={{color:"green"}}> ${subtotal.toFixed(2)}</span></Card.Title>
                        <Button variant="warning" className="w-100 fw-bold">Proceed to Checkout</Button>
                    </Card>
                </div>
            </div>}
        </>
    )
}