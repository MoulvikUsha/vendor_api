const cart = require('../models/cart')

const getFromCart = async (req, res, next) => {
    try {
        const item = await cart.find().lean({
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


const addToCart = async (req, res, next) => {
    try {
        const {
            itemName,
            image,
            cost,
            info
        } = req.body;

        const itemData = await cart.insertMany({
            itemName,
            image,
            cost,
            info
        });
        res.status(200).json({
            error: false,
            message: "Product Added to Cart Successfully",
            response: itemData
        })
    } catch (error) {
        next(error)
    }
}

const deleteFromCart = async (req, res, next) => {
    try {
      
        let watch = await cart.findByIdAndDelete({
            _id: req.params.id
        });
        if (watch) {
            res.status(200).json({
                error: false,
                messsage: 'Product Deleted successfully',
                response: watch
            })
        } else {
            res.status(404).json({
                error: true,
                messsage: 'Product is not found'
            })
        }
    } catch (err) {
        next(err.message)
    }
}

const deleteAllCart = async (req, res, next) => {
    try {
      
        let deleteAll = await cart.deleteMany();
        if (deleteAll) {
            res.status(200).json({
                error: false,
                messsage: 'Products Deleted successfully',
                response: deleteAll
            })
        } else {
            res.status(404).json({
                error: true,
                messsage: ''
            })
        }
    } catch (err) {
        next(err.message)
    }
}
module.exports = {
    getFromCart,
    addToCart,
    deleteFromCart,
    deleteAllCart
}