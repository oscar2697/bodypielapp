import { Route, Routes } from "react-router-dom"
import Slidebar from "../components/Slidebar"
import AddProduct from "../components/AddProduct"
import ListProduct from "../components/listProduct"

const Admin = () => {
    return (
        <div className="lg:flex">
            <Slidebar/>

            <Routes>
                <Route path="/addproduct" element={<AddProduct/>} />
                <Route path="/listproduct" element={<ListProduct/>} />
            </Routes>
        </div>
    )
}

export default Admin
