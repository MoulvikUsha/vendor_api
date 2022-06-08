const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    itemName: {
        type: String
    },
    image: {
        type: String
    },
    cost: {
        type: Number
    },
    info: {
        type: String
    },
});

const product = mongoose.model('product', productSchema);

module.exports = product;