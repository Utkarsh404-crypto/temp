const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const notesschema = new Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true, unique: true },
    passcon: { type: String, required: true, unique: true },

})

module.exports = new mongoose.model('newDoc', notesschema)