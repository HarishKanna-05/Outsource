const Product = require('../models/productModel.js')

const mongoose = require('mongoose')

//GET all products
const getAllProducts = async(req,res)=>{
    const products = await Product.find({})
    if(products.length==0) {
        return res.status(404).json({error: 'No Products found'})
    }
    res.status(200).json(products)
}

//GET single product
const getProduct = async(req,res)=>{
    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid Product id'})
    }
    const product = await Product.findById(id)
    if(!product) {
        return res.status(404).json({error: 'Product not found'})
    }
    res.status(200).json(product)
}

//POST a new product
const createProduct = async(req, res)=>{
    const {name, description, price, category, brand, available_dates, available_ranges, user_id, tags, location, images} = req.body
    try {
        const product = await Product.create({name, description, price, category, brand, available_dates, available_ranges, user_id, tags, location, images})
        res.status(201).json(product)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//DELETE a product

//Update a product

module.exports = {
    createProduct,
    getAllProducts,
    getProduct
}