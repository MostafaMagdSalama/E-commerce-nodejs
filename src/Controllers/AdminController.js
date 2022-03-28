const jwt = require('jsonwebtoken')
const AdminModel=require('../Models/Admin.model')
const ApiError= require('../Helpers/ApiError')



module.exports.adminRegister=async(req,res,next)=>{
try{
const {email , firstName , lastName , password , phone} =req.body;
const Newadmin =new AdminModel({email , firstName , lastName , password , phone});
const response =await Newadmin.save();
res.status(200).json({status:"success",data:response})
}
catch(err){
    next(ApiError.internalRequest(err.message))
}
}
module.exports.adminLogin=async(req,res,next)=>
{
    try{
        const {email , password} = req.body;
        const admin = await AdminModel.findOne({email})
        console.log(admin)
        if(admin){
            admin.comparePassword(password,(err , isMatch)=>{
                if(err)
                {
                    next(ApiError.internalRequest(err.message))
                    return ;
                }
                if(isMatch)
                {
                    const adminId=admin._id;
                    const token = jwt.sign({adminId, isAdminCheck:true },'mostafa');
                    res.status(200).json({ststus:"success",token})
                  
                }
                else {
                    next(ApiError.forbiddenRequest("dosnt match any data in database"))
                    return ;
                }

            })
        }
    }
    catch(err)
    {
        next(ApiError.internalRequest(err.message))
    }
}