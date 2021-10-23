const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String, 
        required: 'El nombre del producto es obligatorio'
    },
    shortDescription: {
        type: String
    },
    largeDescription: {
        type: String
    },
    picture : {
        type: Image
    }
})


const Product = mongoose.model('Product', productSchema);
module.exports = Product;