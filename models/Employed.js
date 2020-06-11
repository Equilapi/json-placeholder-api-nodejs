const mongoose = require('mongoose')

const {
    Schema
} = mongoose

const Employed = new Schema({
    name: {
        type: String,
        default: null
    },
    lastname: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('Employed', Employed)