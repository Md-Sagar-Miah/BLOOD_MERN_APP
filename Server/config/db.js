const mongoose=require("mongoose");
const config = require("./config");

const dbURl=config.db.url;

mongoose.connect(dbURl)
.then(()=>{
    console.log("Database is connected !");
})
.catch((er)=>{
    console.log(er);
    process.exit(1);
})