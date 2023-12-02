const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    manufacturer: String,
    cost: {
        type: Number,
        required: true
    },
    embodiedCO2: {
        type: Number,
        required: true,
        description: "Total amount of CO2 emitted during the production of the product"
    },
    lifecycleStage: {
        type: String,
        required: true,
        enum: ['production', 'use', 'end-of-life'],
        description: "Stage of the product's lifecycle"
    },
    carbonCertifications: [String],
    productionCountry: String,
    recyclable: {
        type: Boolean,
        default: false
    },
    durability: {
        type: String,
        description: "Expected lifespan or durability of the product"
    },
    environmentalImpactScore: {
        type: Number,
        min: 0,
        max: 100,
        description: "Score based on overall environmental impact"
    },
    additionalInfo: {
        type: mongoose.Schema.Types.Mixed,
        description: "Any additional information or remarks about the product"
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;