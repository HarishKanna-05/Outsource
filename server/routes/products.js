const express = require('express')
const {createProduct,
    getAllProducts,
    getProduct
} = require('../controllers/productController')

const router = express.Router()

//GET all products
router.get('/',getAllProducts)

//GET single product
router.get('/:id',getProduct)

//POST a new product
router.post('/', createProduct)

//DELETE a product
router.delete('/:id',(req,res)=>{
    res.json({'msg':'DELETE a product'})
})

//Update a product
router.patch('/:id',(req,res)=>{
    res.json({'msg':'Update a product'})
})

module.exports = router