const { Schema, model } = require('mongoose');

const  userSchema = new Schema({
    _id: String,
    ficha: {
        dados: Object
    }
})

module.exports = model('users', userSchema)