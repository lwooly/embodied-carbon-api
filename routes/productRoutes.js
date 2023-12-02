const express = require('express')
const router = express.Router()

const {
    getProducts,
    addProduct,
    updateProduct,
    removeProduct,
} = require('../controllers/product.controlers')

console.log(getProducts)

router
    .get('/:id?', getProducts)
    .post('/', addProduct)
    .put('/:id', updateProduct)
    .delete('/:id', removeProduct)

module.exports = router;