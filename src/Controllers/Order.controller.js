const OrderModel = require("../Models/Order.model");
const ProdutModel = require("../Models/Product.model")
const ApiError =require('../Helpers/ApiError')
const checkout = async (req, res, next) => {
  const { products , price } = req.body;
  const userId = req.userId;
  const order = new OrderModel({ products, userId , price });
  const status = await order.save();
  if (status) {
    // console.log(status.products);
    status.products.map(async({productId,quantity})=>{
   const result= await   ProdutModel.updateOne({_id:productId},{$inc:{quantity:-quantity}})
   console.log(result);
    })
    res.status(200).send(status);
    // console.log(status);
    return;
  }
  next(ApiError.forbiddenRequest('resouses not found'))
};
const adminVerify=async(req,res,next)=>{
    
        const {status , orderId} =req.body;
     const order= await  OrderModel.updateOne({_id:orderId},{status:status});
     res.status(200).json({status:"success",data:order});

    
  
}
const getAllOrders= 
async(req,res,next)=>
{
  const orders = await OrderModel.find({});
  res.send(orders)
}
const getOrder= 
async(req,res,next)=>
{
const order = await OrderModel.find({userId:req.userId});
res.send(order);
}

module.exports = {
  checkout,adminVerify,getAllOrders,getOrder
};
