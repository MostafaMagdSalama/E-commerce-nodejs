const express = require('express');
const router = express.Router();
const {addProduct,getWishList,deleteProduct} = require('../Controllers/WishList.controller');
const handleUserAuthentication = require('../Middlewares/HandleAuthenticatedUser.middleware')

router.post('/addProduct',handleUserAuthentication,addProduct)
router.post('/getWishList',handleUserAuthentication,getWishList)
router.post('/deleteProduct',handleUserAuthentication,deleteProduct)


module.exports = router;