const mongoose=require('mongoose');
const { Schema } = mongoose;
const orderSchema=new Schema({
    products:[{
        productId:{
            required:true,
            type:mongoose.Types.ObjectId
        },
        quantity:{
            required:true, 
            type:Number
        },
        price:{
            required:true, 
            type:Number
        }
    }],
    userId:{
        required:true,
        type:mongoose.Types.ObjectId
    }
})

module.exports=mongoose.model('Order',orderSchema)