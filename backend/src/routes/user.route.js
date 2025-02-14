const express=require('express')
const multer=require('multer')
const upload = multer({ dest: 'temp-uploads/' });
const {
    GetAddressController,
  CreateUSer,
  verifyUserController,
  signup,
  login,
  getUSerData,
  AddAddressController,
  DeleteAddyController,
    }=require('../controllers/user.controller.js')
const jwt=require("jsonwebtoken")   
const verifyUser = require('../middlewares/jwt-verify.js');
const router=express.Router()
router.post("/create-user",upload.single('file'),CreateUSer)
router.get('/activation/:token',verifyUserController)
router.post('/signup', upload.single('file'), signup);
router.post('/login', login);
router.get('/user-data', verifyUser, getUSerData);
router.post('/add-address', verifyUser, AddAddressController);
router.get('/get-addresses',verifyUser,GetAddressController)
module.exports=router