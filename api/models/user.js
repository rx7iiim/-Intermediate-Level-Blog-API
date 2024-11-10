const { Sequelize,Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

class User extends Model {}

User.init(
  {
   
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensures the 'username' is unique
      validate: {
        notEmpty: { msg: "Username is required" }, // Ensures it's not empty
      },
    },

   
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensures the 'email' is unique
      validate: {
        isEmail: { msg: "Must be a valid email address" },
        notEmpty: { msg: "Email is required" },
      },
    },

  
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Password is required" },
        len: {
          args: [8, Infinity], 
          msg: "Password must be at least 8 characters long",
        },
      },
    },

    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Full name is required" },
      },
    },

    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
    },
  },
  {
    sequelize,
    modelName: 'User',
    timestamps: false,
  }
);

module.exports = User;
