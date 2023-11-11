const user=require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();


const getAllUsers=async(req,res)=>{
    try {
        const allUsers=await user.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getOneUser=async(req,res)=>{
    try {
        const OneUsers=await user.findOne({_id:req.params.id});
        res.status(200).json(OneUsers);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const createUser=async(req,res)=>{
    try {
        const hashedPassword =await bcrypt.hash(req.body.password, 10);
        const newUser= new user({
            name:req.body.name,
            blood:req.body.blood,
            email:req.body.email,
            number:Number(req.body.number),
            password:hashedPassword,
            district:req.body.district,
            image:req.file.filename,
            gender:req.body.gender,
            age:Number(req.body.age),
            
        })
        await newUser.save();
    
        res.status(200).json(newUser);
    } catch (error) {
        res.status(409).send(error.message);
    }
};
const updateUser=async(req,res)=>{
    try {
        const User=await user.findOne({_id:req.params.id});
        if(req.body.password){
            const hashedPassword =await bcrypt.hash(req.body.password, 10);
            User.name=req.body.name,
            User.blood=req.body.blood,
            User.email=req.body.email,
            User.number=Number(req.body.number),
            User.password=hashedPassword,
            User.district=req.body.district,
            User.gender=req.body.gender,
            User.age=Number(req.body.age)
            
        }if(req.body.image){
            User.name=req.body.name,
            User.blood=req.body.blood,
            User.email=req.body.email,
            User.number=Number(req.body.number),
            User.district=req.body.district,
            User.image=req.body.image,
            User.gender=req.body.gender,
            User.age=Number(req.body.age)
        }if((req.body.password && req.body.image)){
            const hashedPassword =await bcrypt.hash(req.body.password, 10);
            User.name=req.body.name,
            User.blood=req.body.blood,
            User.email=req.body.email,
            User.number=Number(req.body.number),
            User.password=hashedPassword,
            User.district=req.body.district,
            User.image=req.body.image,
            User.gender=req.body.gender,
            User.age=Number(req.body.age)
            
        }
        else{
            User.name=req.body.name,
            User.blood=req.body.blood,
            User.email=req.body.email,
            User.number=Number(req.body.number),
            User.district=req.body.district,
            User.gender=req.body.gender,
            User.age=Number(req.body.age)
        }
            
        await User.save();
    
        res.status(200).json(User);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const deleteUser=async(req,res)=>{
    try {
        await user.deleteOne({_id:req.params.id});
        res.status(200).json({message:"Deleted user"});
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const userLogin=async(req,res)=>{
    try{
        const {email, password} = req.body;

        const User=await user.findOne({email: email});
        if(User){
            const validPassword=await bcrypt.compare(password , User.password);
            if(validPassword){
                const token=jwt.sign({
                    name:User.name,
                    id:User._id
                },process.env.JWT_SECRET,{
                    expiresIn:"1 days"
                })

                res.status(200).json({
                    "access_token":token,
                    "id":User._id,
                    "image":User.image,
                    "message":"Login Successful!"
                })
            }else{
                res.status(401).json({
                    "error":"Authentication error!"
                })
            }
        }else{
            res.status(401).json({
                "error":"Authentication error!"
            })
        }

    }catch(error){
        res.status(401).send(error.message);
    }
}


module.exports={getAllUsers,getOneUser,createUser,updateUser,deleteUser,userLogin};