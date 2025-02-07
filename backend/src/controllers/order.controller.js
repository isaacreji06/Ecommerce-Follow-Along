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
        const orders = await OrderModel.find(
            {
              user: userId,
              orderStatus: { $ne: 'Cancelled' },
            },
            { orderStatus: 1, orderItems: 1 }
          ).populate('orderItems');
        return res.status(200).send({ message: 'Data Successfully fetched', success: true, orders });
}catch(er){
    return res.status(500).send({message:er.message,success:true})
}
}


async function CancelOrder(req, res) {
    const userId = req.UserId;
    const orderId = req.query.orderId;
    try {
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res
          .status(400)
          .send({ message: 'InValid User Id', success: false });
      }
      if (!mongoose.Types.ObjectId.isValid(orderId)) {
        return res
          .status(400)
          .send({ message: 'InValid Order Id', success: false });
      }
  
      await OrderModel.findByIdAndUpdate(
        { _id: orderId },
        {
          orderStatus: 'Cancelled',
        },
        {
          new: true,
        }
      );
      return res
        .status(200)
        .send({ message: 'Order cancelled successfully..', success: true });
    } catch (er) {
      return res.status(500).send({ message: er.message, success: false });
    }
  }

module.exports={
    CreateOrder,
    getUserOrders,
    CancelOrder
}