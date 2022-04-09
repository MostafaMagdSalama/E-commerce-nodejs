const express = require('express');
const router = express.Router();
const handleAuthenticatedUser=require('../Middlewares/HandleAuthenticatedUser.middleware')
const verifingAdmin =require('../Middlewares/VerifingAdmin.Middleware')
const {checkout,adminVerify,getAllOrders,getOrder} =require('../Controllers/Order.controller')
router.post('/checkout',handleAuthenticatedUser,checkout)
router.put('/verify_order',verifingAdmin,adminVerify)
// get all orders
router.get('/getAllOrders',getAllOrders)
router.post('/getOrder',handleAuthenticatedUser,getOrder)
//get order by each user
module.exports = router;