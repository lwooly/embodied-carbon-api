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

module.exports = swaggerDocs;

