const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  Name:{type:String,require:[true,"please Enter the Name"]},
  email:{type:String,require:[true,"please enter the email"],unique:[true,"please enter unique email"]},
  password:{type:String,require:[true,"please enter the password"]},
  address: [
    {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      address1: {
        type: String,
      },
      address2: {
        type: String,
      },
      zipCode: {
        type: Number,
      },
      addressType: {
        type: String,
      },
    },
  ],
  role:{
    type:String,
    default:'user'},
  avatar:{url:{},
  public_id:{type:String,require:true}},
  resetPasswordToken:String,
  resetPasswordTime: Date,
},
{versionKey:false}
)
const userModel=mongoose.model('User',userSchema)
module.exports=userModel