const express =require("express");
const multer  = require('multer');
const checkLogin =require("./../middlewares/checkLogin");

const router = express.Router();
const { getAllUsers, getOneUser, updateUser, createUser, deleteUser,userLogin } = require("../controllers/user.controller");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+'_'+file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })

router.get("/",getAllUsers);
router.get("/:id",checkLogin,getOneUser);
router.delete("/:id",checkLogin,deleteUser);
router.patch("/:id",checkLogin,updateUser);
router.post("/",upload.single('image'),createUser);
router.post("/login",userLogin);




module.exports=router;
