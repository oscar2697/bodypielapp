import { MdAdd } from 'react-icons/md'
import upload from '../assets/upload.svg'
import { useState } from 'react'

const AddProduct = () => {
    const [image, setImage] = useState(false)
    const [productDetails, setProductDetails] = useState({
        name: '',
        image: '',
        category: 'producto',
        new_price: '',
        old_price: '',
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name] : e.target.value})
    }

    const Add_Product = async () => {
        console.log(productDetails)
        let responseData
        let product = productDetails

        let formData = new FormData()
        formData.append('product', image)

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData
        }).then((resp) => resp.json()).then((data) => {responseData = data})

        if(responseData.success) {
            product.image = responseData.img_url
            console.log(product)

            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert('Producto Agregado') : alert('No se pudo subir')
            })
        }
    }

    return (
        <div className="p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7">
            <div className="mb-3">
                <h4 className="bold-18 pb-2">Nombre del producto: </h4>
                <input 
                    value={productDetails.name}
                    onChange={changeHandler}
                    type="text" 
                    name="name" 
                    placeholder="Escribe aquí el nombre..." 
                    className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
                />
            </div>

            <div className="mb-3">
                <h4 className="bold-18 pb-2">Precio: </h4>
                <input 
                    value={productDetails.old_price}
                    onChange={changeHandler}
                    type="text" 
                    name="old_price" 
                    placeholder="Escribe aquí el nombre..." 
                    className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
                />
            </div>

            <div className="mb-3">
                <h4 className="bold-18 pb-2">Precio de Oferta: </h4>
                <input 
                    value={productDetails.new_price}
                    onChange={changeHandler}
                    type="text" 
                    name="new_price" 
                    placeholder="Escribe aquí el nombre..." 
                    className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
                />
            </div>

            <div className='mb-3 flex items-center gap-x-4'>
                <h4 className='bold-18 pb-2'>Categoría</h4>
                <select 
                    value={productDetails.category}
                    onChange={changeHandler}
                    name="category" 
                    id="" 
                    className="bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none "
                >
                    <option value='product'>Productos</option>
                    <option value='service'>Servicios</option>
                </select>
            </div>

            <div>
                <label htmlFor="file-input">
                    <img 
                        src={image ? URL.createObjectURL(image) : upload} 
                        alt='' 
                        className='w-20 rounded-sm inline-block' 
                    />
                </label>
                <input 
                    onChange={imageHandler}
                    type='file' 
                    name='image' 
                    id='file-input' 
                    hidden 
                    className='bg-primary max-w-80 w-full py-3 px-4 '
                />
            </div>

            <button 
                onClick={() => Add_Product()}
                className='btn_dark_rounded mt-4 flexCenter gap-x-1'
            >
                <MdAdd/>
                Agregar
            </button>
        </div>
    )
}

export default AddProduct
