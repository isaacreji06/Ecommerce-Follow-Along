const { default: mongoose } = require("mongoose")
const orderModel = require("../models/order.model")

async function CreateOrder(req,res){
    const UserId=req.UserId
    const {items,address,totalAmount}=req.body
    try{
        if(!mongoose.Types.ObjectId.isValid(UserId)){
            return res.status(400).send({message:"Invalid User Id",success:false})
        }
        const checkUser=await UserModel.findOne({_id:UserId})
        if (!checkUser){
            return res.status(400).send({message:'user not present please signup',success:false})
        }
        if (!items){
            return res.status(400).send({message:"Items not present",success:false})
        }
        const order = await orderModel.create({
            user:UserId,
            orderItems:items,
            shippingAddress:address,
            totalAmount:totalAmount
        })
        return res.status(201).send({message:" Data successfully fetched",success:true,order})
    }catch(er){
        return res.status(500).send({message:er.message,success:false})
    }
}

async function getUserOrders(req,res){
const UserId=req.UserId
try{
if (mongoose.Types.ObjectId.isValid(UserId)){
    return res.status(400).send({message:"Invalid User Id",success:false})
}
const checkUser=await UserModel.findOne({_id:UserId})
        if (!checkUser){
            return res.status(400).send({message:'user not present please signup',success:false})
        }
        const orders=await UserModel.findOne({_id:UserId})
        return res.status(200).send({ message: 'Data Successfully fetched', success: true, orders });
}catch(er){
    return res.status(500).send({message:er.message,success:true})
}
}
module.exports={
    CreateOrder,
    getUserOrders
}