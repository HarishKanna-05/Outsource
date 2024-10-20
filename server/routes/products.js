const express = require('express')

const router = express.Router()

//GET all products
router.get('/',(req,res)=>{
    res.json({'msg':'GET all products'})
})

//GET single product
router.get('/:id',(req,res)=>{
    res.json({'msg':'GET a single product'})
})

//POST a new product
router.post('/',(req,res)=>{
    res.json({'msg':'POST a new product'})
})

//DELETE a product
router.delete('/:id',(req,res)=>{
    res.json({'msg':'DELETE a product'})
})

//Update a product
router.patch('/:id',(req,res)=>{
    res.json({'msg':'Update a product'})
})

module.exports = router