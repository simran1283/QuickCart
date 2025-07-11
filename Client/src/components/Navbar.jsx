import { Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import {Badge} from "react-bootstrap"

export const Header = () => {

    const count = useSelector((state)=> state.cart.items.length)

    return (
        <>
            <header className="sticky-top">
                <Navbar expand="lg" className="gap-4 text-white bg-dark px-2">
                    <Navbar.Brand href="#" className="text-white">QuickCart</Navbar.Brand>
                    <Link to="/" className="link1">Home</Link>
                    <Link to="/cart" className="link1">Cart</Link>
                    <Link to="/cart" className="link1 ms-auto me-4"><FontAwesomeIcon icon={faCartShopping}/> Cart{count!=0 && <sup className="fs-6"><Badge bg="primary">{count}</Badge></sup>}</Link>
                </Navbar>
            </header>
        </>
    )
}