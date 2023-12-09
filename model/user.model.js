const mongoose= require('mongoose')
const userSchema= mongoose.Schema({
    username:{type:String,required:true},
    number:{type:Number,required:true,uniquie:true},
    emailid: {type:String,required:true},
    password:{type:String,required:true},
},
{
    timestamps:true,
}
);
const User= mongoose.model("User",userSchema);
module.exports=User;