const userModel=require('../models/user.model.js')
const ErrorHandler=require("../utils/ErrorHandler.js")
const transporter=require("../utils/sendMail.js")
const jwt=require('jsonwebtoken')
const cloudinary=require('../utils/cloudinary.js')
const fs=require('fs')
const { default: mongoose } = require('mongoose');
require('dotenv').config({
    path:'./src/config/.env',
});
async function createUser(req,res){
    const {Name,email,password}=req.body
    const checkUserPresent=await userModel.findOne({
        email:email,
    })
    if (checkUserPresent){
        return new ErrorHandler("Already present in database",400)
    }
    const newUser=new userModel({
        Name:Name,
        email:email,
        password:password
    })
    const data = {
         Name,
         email,
         password
         };

    const token=generateToken(data)
    await transporter.sendMail({
        to:'isaac.reji@kalvium.community',
        from: 'isaacreji2006@gmail.com',
        subject:'verification email',
        text:'Text',
        html:`<h1>Hello world</h1> http://localhost:8080/Activation/${token}`
    })
    await newUser.save()
    return res.send("User Created Succesfully")
}
const generateToken=(data)=>{
    const token=jwt.sign({
        id:_data.id,
        Name:data.Name,
        email:data.email,
    },
        process.env.SECRET_KEY
)
return token
}
const verifyUser = (token) => {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    if (verify) {
      return verify;
    } else {
      return false;
    }
  };
  
  async function verifyUserController(req, res) {
    const { token } = req.params;
    try {
      if (verifyUser(token)) {
        return res
          .status(200)
          .cookie('token', token)
          .json({ token, success: true });
      }
      return res.status(403).send({ message: 'token expired' });
    } catch (er) {
      return res.status(403).send({ message: er.message });
    }
  }
  const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const checkUserPresentinDB = await userModel.findOne({ email: email });
      if (checkUserPresentinDB) {
        return res.status(403).send({ message: 'User already present' });
      }
      console.log('file',req.file,req.body,process.env.CLOUD_NAME)
      const ImageAddress=await cloudinary.uploader
      .upload(req.file.path,{
        folder:'uploads'
      })
      .then((result)=>{
        fs.unlinkSync(req.file.path)
        return result.url
      })
      console.log('url', ImageAddress);
      bcrypt.hash(password, 10, async function (err, hashedPassword) {
        try {
          if (err) {
            return res.status(403).send({ message: err.message });
          }
          await userModel.create({
            Name: name,
            email,
            password: hashedPassword,
            avatar:{
              url:ImageAddress,
              public_id:`${email}_public_id`
            }
          });
  
          return res.status(201).send({ message: 'User created successfully..' });
        } catch (er) {
          return res.status(500).send({ message: er.message });
        }
      });
    } catch (er) {
      return res.status(500).send({ message: er.message });
    }
  };
  const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const checkUserPresentinDB = await userModel.findOne({ email: email });
  
      bcrypt.compare(
        password,
        checkUserPresentinDB.password,
        function (err, result) {
          if (err) {
            return res.status(403).send({ message: er.message, success: false });
          }
          let data = {
            id: checkUserPresentinDB._id,
            email,
            password: checkUserPresentinDB.password,
          };
          const token = generateToken(data);
  
          return res
            .status(200)
            .cookie('token', token)
            .send({ message: 'User logged in successfully..', success: true,token, });
        }
      );
    } catch (er) {
      return res.status(403).send({ message: er.message, success: false });
    }
  };
  const getUserData = async (req, res) => {
    const userId = req.UserId;
    try {
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(401).send({ message: 'Send Valid User Id' });
      }
  
      const checkUserPresentinDB = await userModel.findOne({ _id: userId });
      if (!checkUserPresentinDB) {
        return res
          .status(401)
          .send({ message: 'Please Signup, user not present' });
      }
  
      return res.status(200).send({ data: checkUserPresentinDB });
    } catch (er) {
      return res.status(500).send({ message: er.message });
    }
  };
module.exports={createUser,verifyUserController,signUp,login,getUserData}

