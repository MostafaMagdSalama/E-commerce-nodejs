const jwt =require('jsonwebtoken')
const ApiError = require('../Helpers/ApiError')
const isAdmin=(req,res,next)=>{
    try{
      const {token} = req.body;
  const {adminId , isAdmin}= jwt.verify(token,"omnia")
  if(!isAdmin)
  {
     next(ApiError.forbiddenRequest("unAutherized admin"))
     return ;
  }
  req.adminId=adminId;
  next()
    }
    catch(err)
    {
        next(ApiError.internalRequest(err.message))
    }
}
module.exports=isAdmin;