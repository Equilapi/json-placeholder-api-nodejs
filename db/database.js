const mongoose = require('mongoose')
const URI = 'mongodb://json-placeholder-api:placeholderA123@ds151259.mlab.com:51259/json-placeholder-api'

mongoose.connect(URI, {
        useNewUrlParser: true
    })
    .then(db => console.log('DB is connected Json Placeholder API'))
    .catch(error => console.error(error))

module.exports = mongoose