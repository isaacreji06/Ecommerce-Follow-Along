const file={
    productId: {type:mongoose.Types.ObjectId,ref:"Product"},
    quantity:{type:Number,require:true,default:true},
    userId:{type:mongoose.Types.ObjectId,ref:'User'}
}
const mongoose=require('mongoose')
const cartSchema=new mongoose.Schema(file)
const cartModel=mongoose.model('Cart',cartSchema)