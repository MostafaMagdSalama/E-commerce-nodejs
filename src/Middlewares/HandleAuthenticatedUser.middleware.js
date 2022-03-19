const jwt =require('jsonwebtoken');
const ApiError = require('../Helpers/ApiError');
const handleAuthenticatedUser=(req,res,next)=>{
    try{
        const {token}=req.body;
        const decoded = jwt.verify(token, 'omnia');
        req.userId=decoded.userId;
        next();
    }
    catch(err)
    {
        next(ApiError.forbiddenRequest(err.message))
    }
}
module.exports=handleAuthenticatedUser;