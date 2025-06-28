import { Container, Row, Col, Button } from "react-bootstrap"
import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { add,remove } from "../redux/cartSlice"

export const Carditem = (props) => {

    const navigate = useNavigate()
    const handler = (id) => {
        navigate(`/product-details/${id}`)
    }
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.items)


    return (
        <>
            <Container>
                <Row>
                    {props.data.map((item) => {
                        const inCart = items.includes(item.id)
                        const toggle = (id) => {
                            if (!inCart) {
                                dispatch(add(id))
                            } else {
                                dispatch(remove(id))
                            }
                        }
                        return (
                            <Col key={item.id} md={4} className="mb-4 mt-4">
                                <Card className="h-100 shadow">
                                    <Card.Img variant="top" src={item.thumbnail} style={{ height: "300px", cursor: 'pointer' }} loading="lazy" onClick={() => { handler(item.id) }}></Card.Img>
                                    <Card.Body>
                                        <Card.Text className="fw-bold line-clamp-2 mb-1">{item.title} | {item.description}</Card.Text>
                                        <Card.Text className="mb-1" style={{ color: "#FFD43B" }}><FontAwesomeIcon icon={faStar} /> {item.rating}</Card.Text>
                                        <Card.Text>
                                            <span className="fw-bold">₹{item.price} </span>
                                            <span className="text-decoration-line-through fw-semibold text-muted me-2">₹{(item.price / (1 - (item.discountPercentage) / 100)).toFixed(0)}</span>
                                            <span className="fw-bold" style={{ color: "rgb(17, 197, 95)" }}>({item.discountPercentage}% off)</span></Card.Text>
                                        <Card.Text className="mb-1">FREE {item.shippingInformation}</Card.Text>
                                        <Button variant="warning" className="fw-bold " style={{ width: "100%", backgroundColor: inCart ? "rgba(255,0,0,0.4)" : undefined }} onClick={() => { toggle(item.id) }}>{!inCart ? "Add to Cart" : "Remove from Cart"}</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            {console.log(items)}
        </>
    )
}