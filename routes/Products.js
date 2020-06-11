const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router
    // Add product.
    .post('/product/add', async (req, res) => {
        const product = new Product(req.body)
        await product.save()
        res.json({
            status: 'Product added.'
        })
    })

    // See all products.
    .get('/products', async (req, res) => {
        const products = await Product.find()
        res.json(products)
    })

    // See product detail by SKU.
    .get('/product/sku/:sku', async (req, res) => {
        const product = await Product.find({
            sku: req.params.sku
        })
        res.json(product)
    })

    // Get product data by ID.
    .get('/product/:id', async (req, res) => {
        const product = await Product.findById(req.params.id);
        res.json(product);
    })

    // Update product.
    .put('/product/:id', async (req, res) => {
        await Product.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: 'Update product.'
        });
    })

    // Delete product.
    .delete('/product/:id', async (req, res) => {
        await Product.findByIdAndRemove(req.params.id)
        res.json({
            status: 'Product removed from the BD.'
        })
    })

module.exports = router