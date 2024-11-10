const express = require("express");
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const PostController=require("../controllers/posts")

router.post("/",checkAuth,PostController.createPost)
router.get("/",checkAuth,PostController.getPosts)
router.patch("/",checkAuth,PostController.updatePost)
router.delete("/",checkAuth,PostController.deletePost)
module.exports=router