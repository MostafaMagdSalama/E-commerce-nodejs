const ApiError = require('../Helpers/ApiError')

module.exports.handleError=(err,req,res,next)=>{
    if(err instanceof ApiError)
    {
        res.status(err.code).json(err.message);
    }
next();
}