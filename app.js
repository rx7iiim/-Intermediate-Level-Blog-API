const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors=require("cors");
const Sequelize =  require('./config/database');

const Login=require("./api/routes/Login")
const Profile=require("./api/routes/profile")
const Register=require("./api/routes/Register")
const Posts=require("./api/routes/Posts")
const Likes=require("./api/routes/Likes")
const Comments=require("./api/routes/Comments")
require('dotenv').config();



try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));







// Routes which should handle requests
app.use("/register",Register);
app.use("/login",Login);
app.use("/profile",Profile);
app.use("/posts",Posts);
app.use("/comments",Comments);
app.use("/likes",Likes)

app.use((req, res, next) => {
  const error = new Error("Resource not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;