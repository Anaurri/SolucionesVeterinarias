const express = require ('express');
const createError = require('http-errors');
const router = express.Router();
const ProductsController = require ('../controllers/products.controller');


router.get('/products', ProductsController.list); /*Postman ok*/
router.get('/product/:id', ProductsController.detail); 



/*Handel errors*/
router.use((req, res, next)=>{
    next(createError(404, 'Route not found'))
})
module.exports = router;
