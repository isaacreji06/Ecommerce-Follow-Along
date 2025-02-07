const express=require('express')
const router=express.Router()
const verifyUser=require("../middlewares/jwt-verify.js")
const { CreateOrder, getUserOrders } = require('../controllers/order.controller.js')

router.post("/confirm-order",verifyUser,CreateOrder)
router.get("/get-user-order",verifyUser,getUserOrders)

module.exports=router