const mongoose=require('mongoose');
const { Schema } = mongoose;
const WishListSchema=new Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    products:[
        {
            productId:{
           type:mongoose.Schema.Types.ObjectId,
           require:true,
           ref:"Product"
            }
        }
    ]

})


module.exports=mongoose.model('WishList',WishListSchema)