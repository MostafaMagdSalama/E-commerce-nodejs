const ApiError = require('../Helpers/ApiError')

module.exports.handleError=(err,req,res,next)=>{
    console.log(err.message)

    if(err instanceof ApiError)
    {
        res.status(err.code).json(err.message);
        return ;
    }
    res.json({status:"failed",message:err.message})
}