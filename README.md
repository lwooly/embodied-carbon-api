# Construction Product Sustainability Credentials API

Welcome to the Construction Product Sustainability Credentials API, designed to provide sustainability information on construction products. This API is built with Express.js for the server framework, MongoDB for data storage, Mongoose for data modeling, and is thoroughly documented with Swagger for ease of use. Proof of concept aimed at developers, researchers, and sustainability professionals in the construction industry, this API delivers  key data on products' environmental impact, including CO2 emissions, lifecycle stages, and more. A WIP tool to be integrated with BIM workflows.

## Technology Stack

- **Server**: Express.js
- **Database**: MongoDB with Mongoose for ORM.
- **Documentation**: Swagger UI for API documentation.
- 
## Key Features

- **Product Information**: Access detailed sustainability credentials for a wide range of construction products.
- **CRUD Operations**: Support for Create, Read, Update, and Delete operations on product data.
- **Swagger Documentation**: Easy-to-navigate API documentation to quickly test endpoints and understand data schemas.
- **Environmental Impact Data**: Includes information on embodied CO2, material type, recyclability, and environmental impact scores.
- **Secure Access**: Endpoint protection ensuring data integrity and security.

## API Endpoints

The API is structured around the following endpoints:

- **GET `/api/v1/product-env-metrics/products`**: Retrieve all products with their sustainability credentials.
- **GET `/api/v1/product-env-metrics/products/:id`**: Get a specific product by its ID.
- **POST `/api/v1/product-env-metrics/products`**: Add a new product to the database.
- **PUT `/api/v1/product-env-metrics/products/:id`**: Update the details of an existing product.
- **DELETE `/api/v1/product-env-metrics/products/:id`**: Remove a product from the database.

Swagger documentation is available at `/api-docs`, providing a detailed overview of all endpoints, request bodies, and responses.



## Getting Started

To utilise the API, follow these steps:

1. Ensure you have Node.js and MongoDB installed on your system.
2. Clone the repository to your local machine.
3. Your `.env` file should include the following variables (do not include sensitive data directly in your project or in public repositories):
    DB_URL=<your-database-connection-string>
4. Install the required dependencies by running `npm install`.
5. Start the server with `npm start`. By default, it runs on `http://localhost:3000`.

This API represents a valuable tool for enhancing sustainability in the construction sector, providing accessible and detailed product sustainability credentials to drive informed decision-making.
