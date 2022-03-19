const express = require('express');
const router = express.Router();
const {getAllProducts,addProduct,updateProduct,deleteProduct,getProductDetails} =require('../Controllers/Product.controller')
const { body, validationResult } = require('express-validator');
const verifingAdminMiddleware= require('../Middlewares/VerifingAdmin.Middleware')

router.get('/get_all_products',getAllProducts)
router.get('/get_product_details',getProductDetails)
router.post('/add_product',verifingAdminMiddleware,addProduct)
router.put('/update_product',verifingAdminMiddleware,updateProduct)
router.delete('/delete_product',verifingAdminMiddleware,deleteProduct)

module.exports = router;