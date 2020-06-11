const mongoose = require('mongoose')

const {
    Schema
} = mongoose

const Product = new Schema({
    sku: {
        type: String,
        default: 'SKU-1'
    },
    name: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model('Product', Product)