const userModel=require('../models/user.model.js')
const ErrorHandler=require("../utils/ErrorHandler.js")
async function createUser(req,res){
    const {Name,email,password}=req.body
    const checkUserPresent=await userModel.findOne({
        email:email,
    })
    if (checkUserPresent){
        return new ErrorHandler("Already present in database",400)
    }
    const newUser=new userModel({
        Name:Name,
        email,email,
        password:password
    })
    await newUser.save()
    return res.send("User Created Succesfully")
}
module.exports=createUser