const mongoose=require('mongoose');
const { Schema } = mongoose;
const categorySchema=new Schema({
  name:{
      required:false,
      type:String
  }
})


module.exports=mongoose.model('Category',categorySchema)