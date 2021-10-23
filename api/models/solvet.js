const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const solvetSchema = new Schema({
    name: {
        type: String, 
        required: 'El nombre de la empresa es obligatorio'
    },
    contact1: {
        type: Number,
        required: 'Al menos hay que rellenar un teléfono de contacto'
    },
    contact2: {
        type: Number,
        required: 'Al menos hay que rellenar un teléfono de contacto'
    },
    email: {
        unique: true,
        type: String,
        required: 'A valid email is required',
        match: [EMAIL_PATTERN, 'the email is invalid']
    },
    location1: {  //La dirección se distribuirá en tres lineas*/
        type: String,
    },
    location2: {  //La dirección se distribuirá en tres lineas*/
        type: String,
    },
    city: {
        type: String,
        default: 'Segovia'
    },
    description: {
        type: String,
        default: 'Soluciones veterinarias es una empresa...'
    },
    icon: {
        type: Image,
    }
})


const Product = mongoose.model('Product', solvetSchema);
module.exports = Product;