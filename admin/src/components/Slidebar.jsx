import { Link } from "react-router-dom"
import  addProduct  from '../assets/add.svg'
import  listProduct  from '../assets/list.svg'

const Slidebar = () => {
    return (
        <div className="py-7 flex justify-center gap-x-1 gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6">
            <Link to={'/addproduct'}>
                <button className="flexCenter gap-2 rounded-md bg-primary h-14 w-40 xs:w-44 medium-14">
                    <img src={addProduct} alt="" height={55} width={55}/>
                    <span>Agregar Producto</span>
                </button>
            </Link>

            <Link to={'/listproduct'}>
                <button className="flexCenter gap-2 rounded-md bg-primary h-14 w-40 xs:w-44 medium-14">
                    <img src={listProduct} alt="" height={55} width={55}/>
                    <span>Todos los Productos</span>
                </button>
            </Link>
        </div>
    )
}

export default Slidebar
