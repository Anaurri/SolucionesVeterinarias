const createError = require('http-errors');
const Product = require('../models/product.model');


module.exports.list = (req, res, next) => {
    Product.find()
      .then(products => res.json(products))
      .catch(next)
}

module.exports.detail = (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => {
      if(product) res.json(product);
      else next(createError(404, 'Product not found'))
    })
    .catch(next)
}

