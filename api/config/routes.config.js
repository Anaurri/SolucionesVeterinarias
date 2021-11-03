const express = require ('express');
const createError = require('http-errors');

const router = express.Router;

const ProductsController = require ('../controllers/products.controller');


router.get('/productos', ProductsController.list); 


/*Handel errors*/
router.use((req, res, next)=>{
    next(createError(404, 'Route not found'))
})
module.exports = router;
