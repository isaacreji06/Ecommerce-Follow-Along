const express=require('express')
const multer=require('multer')
const upload = multer({ dest: 'temp-uploads/' });
const {
    createUser,
    verifyUserController,
    login,
    signUp
    }=require('../controllers/user.controller.js')
const jwt=require("jsonwebtoken")   
const router=express.Router()
router.post("/create-user",upload.single('file'),createUser)
router.get('/activation/:token',verifyUserController)
router.post('/signup', upload.single('file'), signUp);
router.post('/login', login);
router.get('/user-data',verifyUser,)
module.exports=router