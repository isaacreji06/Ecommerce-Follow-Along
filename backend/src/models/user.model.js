const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  Name:{type:String,require:[true,"please Enter the Name"]},
  email:{type:String,require:[true,"please enter the email"],unique:[true,"please enter unique email"]},
  password:{type:String,require:[true,"please enter the password"]},
  address:[
    {city:String},
    {country:String},
    {address1:String},
    {address2:String},
    {zipCode:String},
    {addressType:String}],
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