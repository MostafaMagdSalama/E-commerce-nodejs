const mongoose=require('mongoose');
const { Schema } = mongoose;
const productSchema=new Schema({
    name:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:Number
    },
    quantity:{
        required:true,
        type:Number
    },
    description:{
        required:false,
        type:String
    },
    categoryId:{
        required:false,
        type:Number,
    },
    pictures:{
        required:false,
        type:String
    }
})

module.exports=mongoose.model('Product',productSchema)
