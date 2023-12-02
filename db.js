const mongoose = require('mongoose')

const {DB_URL = 'mongodb://127.0.0.1/product-env-metrics'} = process.env;

console.log(DB_URL)

async function connect() {
    try {
        await mongoose.connect(DB_URL);
        console.log(`DB connected`)
    } catch (err) {
        console.log(err)
    }
}

connect().catch(err => console.log(err))