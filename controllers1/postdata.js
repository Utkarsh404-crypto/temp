const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const postschema = new Schema({
    post: { type: String }

})

module.exports = new mongoose.model('newDoc1', postschema)