const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3000;


require('dotenv').config()
require('./config/db')
app.use(cors('*'))

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

// routes
const product = require('./routes/products')
const cart = require('./routes/cart')
app.use('/products', product)
app.use('/cart', cart)

app.get('/', (req, res) => {
    res.json({
        app: 'Medifit',
        path: '/'
    });
});


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})