const express = require('express');
const router = express.Router();
const handleAuthenticatedUser=require('../Middlewares/HandleAuthenticatedUser.middleware')
const verifingAdmin =require('../Middlewares/VerifingAdmin.Middleware')
const {checkout,adminVerify} =require('../Controllers/Order.controller')
router.post('/checkout',handleAuthenticatedUser,checkout)
router.put('/verify_order',verifingAdmin,adminVerify)

module.exports = router;