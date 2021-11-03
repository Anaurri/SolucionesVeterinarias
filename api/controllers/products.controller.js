const createError = require('http-errors');
const Product = require('../models/product.model');



module.exports.list = (req, res, next) => {
    Product.find()
      .then(products => res.json(products))
      .catch(next)
  }
  