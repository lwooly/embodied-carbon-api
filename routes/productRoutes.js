const express = require('express')
const router = express.Router()
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('../swagger')


const {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    removeProduct,
} = require('../controllers/product.controllers');

router
    .get('/products', getProducts)
    .get('/products/:id', getProductById)
    .post('/products/', addProduct)
    .put('/products/:id', updateProduct)
    .delete('/products/:id', removeProduct)
    .use('/api-docs', swaggerUI.serve)
    .get('/api-docs', swaggerUI.setup(swaggerDocs))

module.exports = router;