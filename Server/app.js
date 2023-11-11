const express = require("express");
const cors=require("cors");
const userRouter=require("./routes/user.route");
const app = express();
require("./config/db");

app.use(cors());
app.use(express.urlencoded({extended:true }));
app.use(express.json());
app.use("/api/users",userRouter);
app.use("/images",express.static("images"));

app.get("/",(req,res)=>{
    res.send("hello");
})

//handling route error
app.use((req,res,next)=>{
    res.status(404).json({
        Message:"Route not found !"
    });
})

//handling server error
app.use((err,req,res,next)=>{
    res.status(500).json({
        Message:"Somthing Broke!"
    });
})

module.exports=app;