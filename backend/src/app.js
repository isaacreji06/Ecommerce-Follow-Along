if (process.env.NODE_ENV!=='PRODUCTION'){
    require('dotenv').config({
        path:'./src/config/.env',
    });
}
const express=require('express')
const app=express()
const userRouter=require("./routes/user.route.js")
const productRouter=require('./routes/product.route.js')
app.use(express.json())

app.get("/",(req,res)=>{
    return res.send("Welcome to backend")
})
app.use('/user',userRouter)
app.use('/product', productRouter)
module.exports=app