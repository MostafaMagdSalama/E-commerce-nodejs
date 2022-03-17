const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const ApiError=require('../Helpers/ApiError')
const { Schema } = mongoose;
const userSchema=new Schema({
    email:{
        required:true,
        type:String,
        unique: true
    },
    firstName:{
        required:true,
        type:String
    },
    lastName:{
        required:true,
        type:String
    },
    hashedPassword:{
        required:true,
        type:String
    },
   address:{
       country:{
        required:false,
        type:String
       },
       street:{
        required:false,
        type:String
       },
       city:{
        required:false,
        type:String
       },
       zip:{
        required:false,
        type:Number
       }
   }
})
userSchema.pre('save',function(next) {
    var user=this;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.hashedPassword, salt, function(err, hash) {
           user.hashedPassword=hash;
           console.log(user.hashedPassword)
           next();
        });
    });
   
  });
// userSchema.methods.comparePassword=function(plainPassword , cb ){
 
//     bcrypt.compare(plainPassword, this.hashedPassword , (err,isMatch)=>{
//         if(err) return cb(err)
//         cb(null,isMatch)
       
//     })
// }
userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.hashedPassword, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}
module.exports=mongoose.model('User',userSchema)