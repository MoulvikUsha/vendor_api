const product = require('../models/products')

const getItem = async (req, res, next) => {
    try {
        const item = await product.find().lean({
            _id: req.params.id
        });
        if (item) {
            res.status(200).json({
                error: false,
                message: "Product Fetched Successfully",
                response: item
            })
        } else {
            res.status(404).json({
                error: false,
                message: "No item found",
            })
        }
    } catch (error) {
        next(error)
    }
}


const addItem = async (req, res, next) => {
    try {
        const {
            itemName,
            image,
            cost,
            info
        } = req.body;

        const itemData = await product.insertMany({
            itemName,
            image,
            cost,
            info
        });
        res.status(200).json({
            error: false,
            message: "Product Details Added Successfully",
            response: itemData
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getItem,
    addItem,
}