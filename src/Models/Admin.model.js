const mongoose=require('mongoose');
const { Schema } = mongoose;
const adminSchema=new Schema({
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
    password:{
        required:true,
        type:String
    },
   phone:{
       required:false,
       type:String 
   }
})


adminSchema.pre('save',function(next) {
    var user=this;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.hashedPassword, salt, function(err, hash) {
           user.hashedPassword=hash;
           console.log(user.hashedPassword)
           next();
        });
    });
   
  });
  adminSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.hashedPassword, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}
module.exports=mongoose.model('Admin',adminSchema)