const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3000;

const jwt = require('jsonwebtoken');
const router = express.Router();

require('dotenv').config()
require('./config/db')
app.use(cors('*'))

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

// routes
const product = require('./routes/products')
const cart = require('./routes/cart');
app.use('/products', product)
app.use('/cart', cart)

app.get('/', (req, res) => {
    res.json({
        app: 'Medifit',
        path: '/'
    });
});


app.post('/login', (req, res) => {
    let userData = req.body;
    let payload = { subject: userData.userName};
    let token = jwt.sign(payload, 'secretKey');
    res.status(200).json({token});
})


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})