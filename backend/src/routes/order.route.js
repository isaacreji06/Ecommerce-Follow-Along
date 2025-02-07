const express=require('express')
const router=express.Router()
const verifyUser=require("../middlewares/jwt-verify.js")
const { CreateOrder, getUserOrders,CancelOrder, } = require('../controllers/order.controller.js')

router.post("/confirm-order",verifyUser,CreateOrder)
router.get("/get-user-order",verifyUser,getUserOrders)
router.patch('/cancel-order', verifyUser, CancelOrder);

module.exports=router