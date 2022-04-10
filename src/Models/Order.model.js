const mongoose=require('mongoose');
const { Schema } = mongoose;
const orderSchema=new Schema({
    products:[{
        product:{
            id:{
                required:true,
                type:mongoose.Types.ObjectId
            },
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
                type:String,
                ref:"Category"
            },
            picture:{
                required:false,
                type:String
            }
        },
        quantity:{
            required:true, 
            type:Number
        }
    }],
     
    price:{
            required:true, 
            type:Number
        },
    date:{
        required:true,
        type:Number
    }, 
    userId:{
        required:true,
        type:mongoose.Types.ObjectId
    },
    status:{
        required:false,
        type:String,
        default:"pending"
    },

})

module.exports=mongoose.model('Order',orderSchema)