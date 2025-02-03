const express=require('express')
const router=express.Router()
const verifyToken=require("../middlewares/jwt-verify.js")

router.post("/confirm=order",verifyToken,)
module.exports=router