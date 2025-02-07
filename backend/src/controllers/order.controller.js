const { mongoose } = require('mongoose');
const OrderModel = require('../models/Order.model.js');
const CartModel = require('../models/cart.model.js');
const UserModel = require('../models/user.model.js');
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
        const order = Items.map(async (ele) => {
            return await OrderModel.create({
              user: userId,
              orderItems: ele.productId._id,
              shippingAddress: address,
              totalAmount: totalAmount,
            });
          });
          await Promise.all(order);

        const itemsMapped=items.map(async(eachItem)=>{
            return await CartModel.findByIdAndDelete({_id:eachItem._id})
        })
        const checkDeletedItems=await Promise.all(itemsMapped)
        return res.status(201).send({message:" Data successfully fetched",success:true,checkDeletedItems})
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
        const orders = await OrderModel.find({
            user: userId,
            orderStatus: { $ne: 'Cancelled' },
          }).populate('orderItems');
        return res.status(200).send({ message: 'Data Successfully fetched', success: true, orders });
}catch(er){
    return res.status(500).send({message:er.message,success:true})
}
}
module.exports={
    CreateOrder,
    getUserOrders
}