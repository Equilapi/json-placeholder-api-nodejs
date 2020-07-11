const mongoose = require('mongoose')
                const URI = 'xxxxxxxxxx'

mongoose.connect(URI, {
        useNewUrlParser: true
    })
    .then(db => console.log('DB is connected Json Placeholder API'))
    .catch(error => console.error(error))

module.exports = mongoose
