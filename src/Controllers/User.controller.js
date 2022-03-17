const jwt = require('jsonwebtoken')
const UserModel = require('../Models/User.model')
const ApiError= require('../Helpers/ApiError')
const util=require('util').promisify
const { body, validationResult } = require('express-validator');


module.exports.register=async (req, res, next) => {
    const { email, firstName, lastName, password, country, street, zip } = req.body;
    const errors = validationResult(req);
    const user=await UserModel.findOne({email});
    if (errors.errors.length) {
        res.status(404).json(!errors.errors.length)
        return ;
    }
   if(user){
    next(ApiError.internalRequest("this user already exists"));
    return ;
   }
   const newUser=new UserModel({
    email, firstName, lastName, hashedPassword:password, country, street, zip 
   }).save()
   .then((data,error)=>{
       if(error)
       {
        console.log('here')

        res.status(404).json(error);
        return ;
       }
       res.status(200).json({status:"success",data:"user added succsufully"})
   })
   

}
module.exports.login=async (req,res,next)=>{
    const {email, password}=req.body;
    const user=await UserModel.findOne({email});
    if(!user)
    {
        next(ApiError.resourceNotFound("user not found"));
        return ;
    }
 user.comparePassword(password ,(err,isMatch)=>{
    if(err)
    {
        next(ApiError.forbiddenRequest("email or password not correct"));
        return ;
    }
    if(isMatch)
    {
        const userId=user._id;
        const token = jwt.sign({userId }, 'omnia');
        res.status(200).json({ststus:"success",token})
        return;
    }

    next(ApiError.forbiddenRequest("email or password not correct"));
})
       
}