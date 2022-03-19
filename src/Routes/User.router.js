const express = require('express');
const {register,login,userData} =require('../Controllers/User.controller')
const handleAuthenticatedUserMiddleware=require('../Middlewares/HandleAuthenticatedUser.middleware')
const router = express.Router();


const { body, validationResult } = require('express-validator');

router.post('/register',
    body('email').isEmail(),
    body('password').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    body('firstName').not().isEmpty(),
    body('lastName').not().isEmpty(),
    body('country').not().isEmpty(),
    body('street').not().isEmpty()
    ,register)

router.post('/login',login)
router.post('/user_details',handleAuthenticatedUserMiddleware,userData)

module.exports = router;