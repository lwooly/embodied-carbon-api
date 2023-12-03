const Product = require("../models/products");

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - product
 *         - material
 *         - cost
 *         - embodiedCO2
 *         - lifecycleStage
 *       properties:
 *         product:
 *           type: string
 *           description: Name of the product.
 *         material:
 *           type: string
 *           description: Material of the product.
 *         manufacturer:
 *           type: string
 *           description: Manufacturer of the product.
 *         cost:
 *           type: number
 *           description: Cost of the product.
 *         embodiedCO2:
 *           type: number
 *           description: Total amount of CO2 emitted during the production of the product.
 *         lifecycleStage:
 *           type: string
 *           enum: [production, use, end-of-life]
 *           description: Stage of the product's lifecycle.
 *         carbonCertifications:
 *           type: array
 *           items:
 *             type: string
 *           description: Carbon certifications of the product.
 *         productionCountry:
 *           type: string
 *           description: Country where the product is produced.
 *         recyclable:
 *           type: boolean
 *           default: false
 *           description: Whether the product is recyclable.
 *         durability:
 *           type: string
 *           description: Expected lifespan or durability of the product.
 *         environmentalImpactScore:
 *           type: number
 *           minimum: 0
 *           maximum: 100
 *           description: Score based on overall environmental impact.
 *         additionalInfo:
 *           type: object
 *           additionalProperties: true
 *           description: Any additional information or remarks about the product.
 */

/**
 * @openapi
 * /api/v1/product-env-metrics/products:
 *   get:
 *     summary: Retrieve all products
 *     description: Retrieves a list of all products.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal Server Error
 */

exports.getProducts = async function (req, res) {
  try {
    const Products = await Product.find();
    return res.status(200).json(Products);
  } catch (err) {
    res.status(500).send(err);
  }
};

/**
 * @openapi
 * /api/v1/product-env-metrics/products/{id}:
 *   get:
 *     summary: Retrieve a single product
 *     description: Retrieves a single product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the product.
 *     responses:
 *       200:
 *         description: A single product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal Server Error
 */


exports.getProductById = async function (req, res) {
  const query = {}
  query._id = req.params.id
  try {
    const product = await Product.find(query);
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).send(err);
  }
};

/**
 * @openapi
 * /api/v1/product-env-metrics/products:
 *   post:
 *     summary: Add a new product
 *     description: Creates a new product with the given details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Successfully created a new product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal Server Error
 */


exports.addProduct = async function (req, res) {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};

/**
 * @openapi
 * /api/v1/product-env-metrics/products/{id}:
 *   put:
 *     summary: Update a product
 *     description: Updates the details of an existing product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the product to be updated.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Successfully updated the product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal Server Error
 */


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

/**
 * @openapi
 * /api/v1/product-env-metrics/products/{id}:
 *   delete:
 *     summary: Delete a product
 *     description: Deletes a product specified by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the product to be deleted.
 *     responses:
 *       200:
 *         description: Successfully deleted the product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal Server Error
 */


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