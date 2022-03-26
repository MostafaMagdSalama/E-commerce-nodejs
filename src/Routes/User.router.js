const express = require('express');
const {register,login,userData} =require('../Controllers/User.controller')
const handleAuthenticatedUserMiddleware=require('../Middlewares/HandleAuthenticatedUser.middleware')
const router = express.Router();




router.post('/register',register)

router.post('/login',login)
router.post('/user_details',handleAuthenticatedUserMiddleware,userData)

module.exports = router;