const userModel=require('../models/user.model.js')
const ErrorHandler=require("../utils/ErrorHandler.js")
const transporter=require("../utils/sendMail.js")
const jwt=require('jsonwebtoken')
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
        // _id:_data.id,
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
  
      bcrypt.hash(password, 10, async function (err, hashedPassword) {
        try {
          if (err) {
            return res.status(403).send({ message: err.message });
          }
          await userModel.create({
            Name: name,
            email,
            password: hashedPassword,
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
            .send({ message: 'User logged in successfully..', success: true });
        }
      );
    } catch (er) {
      return res.status(403).send({ message: er.message, success: false });
    }
  };
module.exports={createUser,verifyUserController,signUp,login}
