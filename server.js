const express = require('express')
const hotelRouter= require("./routes/hotel.router");
const hotelDataAddedToRouter =require("./routes/dataimport.router")
const categoryDataAddedToRouter =require("./routes/categorydataimport.router");
const categoryrouter=require("./routes/category.router")
const singlehotelrouter=require("./routes/singlehotel.router")
const authRouter=require('./routes/auth.router')
const wishlistRouter=require('./routes/wishlist.router')
const mongoose= require('mongoose')
const app = express()
const dotenv= require('dotenv');
const cors=required('cors');
dotenv.config();
const connectDB= require("./config/dbconfig")
app.use(express.json());
app.use(cors());
connectDB();
const PORT =3500
// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send('hello world')
})

app.use("/api/hoteldata",hotelDataAddedToRouter);
app.use("/api/categorydata",categoryDataAddedToRouter);
app.use("/api/category",categoryrouter)
app.use("/api/hotels",hotelRouter)
app.use("/api/hotels",singlehotelrouter)
app.use("/api/auth",authRouter)
app.use("/api/wishlist",wishlistRouter)
mongoose.connection.once("open",()=>{
  console.log("Connectedto db");
    app.listen(process.env.PORT||PORT ,()=>{
    console.log("server is up and running")
})


})