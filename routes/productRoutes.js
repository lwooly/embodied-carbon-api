const express = require('express')
const router = express.Router()
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
      openapi: '3.1.0',
      info: {
        title: 'Product Environmental Metrics API',
        version: '1.0.0',
      },
    },
    apis: ['./controllers/product.controllers.js']
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);

  console.log(swaggerDocs)


const {
    getProducts,
    addProduct,
    updateProduct,
    removeProduct,
} = require('../controllers/product.controllers');

router
    .get('/product/:id?', getProducts)
    .post('/product/', addProduct)
    .put('/product/:id', updateProduct)
    .delete('/product/:id', removeProduct)
    .use('/api-docs', swaggerUI.serve)
    .get('/api-docs', swaggerUI.setup(swaggerDocs))

module.exports = router;