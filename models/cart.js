const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
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

const cart = mongoose.model('cart', cartSchema);

module.exports = cart;