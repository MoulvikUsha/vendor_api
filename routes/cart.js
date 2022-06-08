const express = require('express');
const router = express.Router();
const cartContoller = require('../controllers/cart')

router.get('/getFromCart', cartContoller.getFromCart)
router.post('/addToCart', cartContoller.addToCart)
router.delete('/deleteFromCart/:id', cartContoller.deleteFromCart)
router.delete('/deleteAllCart', cartContoller.deleteAllCart)

module.exports = router;