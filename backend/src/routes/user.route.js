const express=require('express')
const {createUser}=require('../controllers/user.controller')
const upload=require('../middlewares/multer')

const router=express.Router()
router.get("/create-user",upload.single('file'),createUser)
module.exports=router