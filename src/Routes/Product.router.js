const express = require('express');
const router = express.Router();
const {getAllProducts,addProduct,updateProduct,deleteProduct,getProductDetails} =require('../Controllers/Product.controller')
const { body, validationResult } = require('express-validator');

router.get('/get_all_products',getAllProducts)
router.get('/get_product_details',getProductDetails)
router.post('/add_product',addProduct)
router.put('/update_product',updateProduct)
router.delete('/delete_product',deleteProduct)

module.exports = router;