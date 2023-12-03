const Product = require("../models/products");


/**
 * @openapi
 * /products/{id}:
 *   get:
 *     summary: Retrieves products
 *     description: Returns all products or a specific product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: false
 *         schema:
 *           type: string
 *         description: The product ID
 *     responses:
 *       200:
 *         description: A list of products or a single product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal Server Error
 */


exports.getProducts = async function (req, res) {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }

  try {
    const Products = await Product.find(query);
    return res.status(200).json(Products);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addProduct = async function (req, res) {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateProduct = async function (req, res) {
  try {
    const updatedProduct = await Product.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true})
    if(!updatedProduct) {
      return res.send(`Not updated: Product not found`)
    }
    return res.status(200).json(updatedProduct)
  } catch (err) {
    res.status(500).send(err);
  }
}

exports.removeProduct = async function (req, res) {
  try {
    const removedProduct = await Product.findByIdAndDelete(req.params.id)
    if(!removedProduct) {
      return res.send(`Not deleted: Product not found`)
    }
    return res.status(200).json(removedProduct)
  }  catch (err) {
    res.status(500).send(err);
  }
}