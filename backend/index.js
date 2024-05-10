const port = 4000

const express = require('express')
const app = express()

const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())

//conexion
const password = encodeURIComponent('EsteticA%2023*');
mongoose.connect(`mongodb://bodypieleb:${password}@ac-uomatyy-shard-00-00.tnio0xv.mongodb.net:27017,ac-uomatyy-shard-00-01.tnio0xv.mongodb.net:27017,ac-uomatyy-shard-00-02.tnio0xv.mongodb.net:27017/BodyPiel?ssl=true&replicaSet=atlas-kl8ztd-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`);

//api creacion
app.get('/', (req, res) => {
    res.send('Express App is running')
})

//almacen de imagenes
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//endopoint para imagenes
app.use('/images', express.static('upload/images'))
app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1, 
        img_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

const Product = mongoose.model('Product', {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: false
    },
    old_price: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    available: {
        type: Boolean,
        default: true
    }
})

app.post('/addproduct', async(req, res) => {
    let products = await Product.find({})
    let id

    if(products.length > 0) {
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id + 1
    } else {
        id = 1
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    console.log(product)

    await product.save()
    console.log('guardado')

    res.json({
        success: true,
        name: req.body.name
    })
})

//eliminar productos
app.post('/removeproduct', async(req, res) => {
    await Product.findOneAndDelete({id: req.body.id})

    console.log('Eliminado')
    res.json({
        success: true,
        name: req.body.name
    })
})

//lista de todos los productos
app.get('/allproducts', async(req, res) => {
    let products = await Product.find({})
    //console.log('Todos los productos')
    console.log('Ctegoria: ', products.map(product => product.category))
    res.send(products)
})

//ultimos productos
app.get('/newcollection', async (req, res) => {
    let products = await Product.find({})
    let newCollection = products.slice(1).slice(-8)

    console.log("Mostrando nueva colección")
    res.send(newCollection)
})

// productos populares
app.get('/popular', async (req, res) => {
    let products = await Product.find({category: "producto"})
    let popular = products.slice(0, 4)

    console.log('Productos populars')
    res.send(popular)
})

app.listen(port, (error) => {
    if(!error) {
        console.log('Corriendo en el serividor ' + port)
    } else {
        console.log('Error: ' + error)
    }
})