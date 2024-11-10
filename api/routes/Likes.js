const express = require("express");
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const LikesController=require("../controllers/likes")

router.post("/like",checkAuth,LikesController.likePost)
router.post("/unlike",checkAuth,LikesController.unlikePost)
module.exports=router;
