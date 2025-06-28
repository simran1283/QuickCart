import { ProductList } from "./pages/ProductList"
import { Cart } from "./pages/Cart"
import { ProductDetail } from "./pages/ProductDetail"
import "./App.css"
import { Route,Routes } from "react-router-dom"
function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/product-details/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </>
  )
}

export default App
