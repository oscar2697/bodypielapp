import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
//import Login from "./pages/Login"
import Product from "./pages/Product"
import Footer from "./components/Footer"
import espa from './assets/img/espa.jpg'
import producto from './assets/img/producto.jpg'
import Category from "./pages/Category"

function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/servicios" element={<Category category='service' banner={espa}/>}/>
          <Route path="/productos" element={<Category category='producto' banner={producto}/>}/>

          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </main>
  )
}


export default App
