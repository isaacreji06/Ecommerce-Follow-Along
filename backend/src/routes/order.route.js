const express=require('express')
const router=express.Router()
const verifyToken=require("../middlewares/jwt-verify.js")
const { CreateOrder, getUserOrders } = require('../controllers/order.controller.js')

router.post("/confirm-order",verifyToken,CreateOrder)
router.get("/get-user-order",verifyToken,getUserOrders)
module.exports=router