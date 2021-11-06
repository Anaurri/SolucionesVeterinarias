//const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    code: {
        type: String,
    },
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
    /*La clave se compone de tres pares de dígitos. xxyyzz  donde xx es la key de nivel 1, yy nivel 2, zz nivel 3*/
    key: {
        type: [String]
    },
    price: {
        type: Number
    },
    IVA: {
        type: Number
    },
    recipe: {
        type: Boolean,
        default: false
    },
    picture: {
        type: String,
        required: 'Image is required',
        default: `https://www.google.com/search?q=no+imagen&sxsrf=AOaemvIlcLYbklyvhHqFicVNbxV_XnQEcg:1635968520263&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiC5I3U-fzzAhVjB2MBHaE0DMMQ_AUoAXoECAEQAw&biw=1294&bih=669&dpr=1#imgrc=2uz6qdgoYKOZzM`,
        validate: {
            validator: function (value) {
                try {
                    const url = new URL(value);
                    return url.protocol === 'http:' || url.protocol === 'https:'
                } catch (error) {
                    return false;
                }
            },
            message: props => `Invalid image URL`
        }
    }
})


const Product = mongoose.model('Product', productSchema);
module.exports = Product;