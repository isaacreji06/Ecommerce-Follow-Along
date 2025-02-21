if (process.env.NODE_ENV!=='PRODUCTION'){
    require('dotenv').config({
        path:'./src/config/.env',
    });
}
const cors=require('cors')
const express=require('express')
const cookieParser=require('cookie-parser')
const app=express()
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const OrderRoute=require('./routes/order.route.js')
const userRouter=require("./routes/user.route.js")
const productRouter=require('./routes/product.route.js')
const cartRouter=require('./routes/cart.route.js')
const PaymentRouter = require('./routes/Payment.route.js');

app.get("/",(req,res)=>{
    return res.send("Welcome to backend")
})
app.use('/user',userRouter)
app.use('/product', productRouter)
app.use('/cart',cartRouter)
app.use('/orders',OrderRoute)
app.use('/payment', PaymentRouter);
module.exports=app