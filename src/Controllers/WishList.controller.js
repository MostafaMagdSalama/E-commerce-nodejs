
const WishListModel = require('../Models/WishList')
const addProduct= 
async(req,res,next)=>
{
    const {product} = req.body;
    const WidhList= await  WishListModel.findOne({userId:req.userId});
    console.log(WidhList);
    if(WidhList)
    {
    const acknowladge =await WishListModel.updateOne({userId:req.userId},{$push:{products:{product}}});
    res.send(acknowladge);
    return ;
    }
   new  WishListModel({userId:req.userId,product:[product]}).save()
   .then(data=>{
       res.send(data);
   })
   .catch(err=>{
    res.send(err.message);
   })
}

const deleteProduct = 
async(req,res,next)=>
{
const {productId} = req.body;
const getwishList =await WishListModel.findOne({userId:req.userId}).lean();
 const newList = getwishList.products.filter(product=>product._id.toString() !== productId);
 const acknowladge =await WishListModel.updateOne({userId:req.userId},{products:newList});
 res.send(acknowladge)
}


const getWishList = 
async(req,res,next)=>
{
const wishList = await WishListModel.findOne({userId:req.userId});
res.send(wishList);
}

module.exports={addProduct,getWishList,deleteProduct}