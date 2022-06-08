const express = require('express');
const router = express.Router();
const productContoller = require('../controllers/products')

router.get('/getItem', productContoller.getItem)
router.post('/addItem', productContoller.addItem)
// router.delete('/deleteItem/:id', productContoller.deleteItem)

module.exports = router;