const mongoose = require('mongoose')
const connection_uri = 'mongodb://localhost:27017/redux-auth'
// const connection_uri = `mongodb+srv://admin_67:<password>@cluster0-pg9f0.mongodb.net/test?retryWrites=true&w=majority`
mongoose.Promise = global.Promise

mongoose.connect(connection_uri, { useNewUrlParser: true })
    .then(() => {
        console.log('redux-auth database: connected')
    })
    .catch((err) => {
        console.log('redux-auth database: error')
    })

module.exports = mongoose