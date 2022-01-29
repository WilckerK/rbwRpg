const { Schema, model } = require('mongoose');

const  userSchema = new Schema({
    _id: String,
    ficha: {
        dados: Array
    }
})

module.exports = model('users', userSchema)