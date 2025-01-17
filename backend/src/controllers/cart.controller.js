const mongoose=require('mongoose')
const userModel = require('../models/user.model')
async function AddToCartController(){
    const {productId,quantity}=req.body
    const userId=req.userId
    try{
        if(!mongoose.Types.ObjectId.isValid(productId)){
            return res.status(400).send({message:'send Valid Product'})
        }
        if(!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(400).send({message:'send Valid userId'})
        }
        
        const checkUserPresent=await userModel.findOne({_id:userId})
        if (!checkUserPresent){
            return res.status(401).send({message:'unauthorized please signup'})
        }
        const checkIfProductPresent=await Cartmodel.findOne({_id:productId})
        if (!checkIfProductPresent){
            return res.status(400).send({message:"product already present",success:false})
            await Cartmodel.create({
                productId,quantity,userId
            })
            return res.status(201).send({message:'produxt is successfully creayed'})
        }
    
    }catch(er){
        return res.status(500).send({message:"failed",success})
    }
}

async function GetProductsForUser(req,res){
    const userId=req.userId
    try{
        if (!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(401).send({message:'unauthorizes please signup'})
        }
        const checkUserPresent=await userModel.findOne({_id:userId})
        if (!checkUserPresent){
            return res.status(401).send({message:"unauthorized please signup"})
        }
        const data=await Cartmodel.find({userId})
        return res.status(200).send({message:"data is successfully fetched",success:true,cartData:data})
    }catch(er){
        return res.status(500).send({message:"failed",success})
    }
}

module.exports={AddToCartController,GetProductsForUser}