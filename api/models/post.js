const { Sequelize,Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database'); 
const User = require('./user'); 

class Post extends Model {}

Post.init(
  {
    
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Title is required' },
      },
    },

    
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Content is required' },
      },
    },

    
    category: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    
    author: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: User, 
        key: 'id', 
      },
      onDelete: 'CASCADE', 
    },

    
    likes: {
      type: DataTypes.JSONB, 
      defaultValue: [],
    },

    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
    },
  },
  {
    sequelize, 
    modelName: 'Post',
    timestamps: false, 
  }
);

module.exports = Post;
