const express = require("express");
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const UserController=require("../controllers/users");

router.get("/",checkAuth,UserController.getUserProfile);
module.exports=router;