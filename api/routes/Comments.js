const express = require("express");
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const CommentsController=require("../controllers/comments");
const { route } = require("./Login");

router.post("/",checkAuth,CommentsController.addComment);
router.delete("/",checkAuth,CommentsController.deleteComment);
router.get("/",checkAuth,CommentsController.getComments);
module.exports=router;