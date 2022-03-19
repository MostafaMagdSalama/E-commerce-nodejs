const express = require('express');
const router = express.Router();
const {adminRegister,adminLogin} =require('../Controllers/AdminController')
// router.get('/get_all_products',getAllProducts)
// router.get('/get_product_details',getProductDetails)
// router.post('/add_product',addProduct)
// router.put('/update_product',updateProduct)
// router.delete('/delete_product',deleteProduct)
router.post('/admin_register',adminRegister)
router.post('/admin_login',adminLogin)

module.exports = router;