const mongoose  = require("mongoose");

const uniqueValidator = require('mongoose-unique-validator');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    blood:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true,
        unique: true
    },
    number:{
        type:Number,
        require: true
    },
    password:{
        type:String,
        require: true
    },
    district:{
        type:String,
        require: true
    },
    image:{
        type:String,
        require: true
    },
    gender:{
        type:String,
        require: true
    },
    age:{
        type:Number,
        require: true
    },
    createdOn:{
        type:Date,
        default:Date.now
    },
    
})

userSchema.plugin(uniqueValidator);


module.exports=mongoose.model("user",userSchema);