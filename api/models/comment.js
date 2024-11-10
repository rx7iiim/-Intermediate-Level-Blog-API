const { Sequelize,Model, DataTypes} = require('sequelize');
const sequelize = require('../../config/database'); 
const User = require('./user'); 
const Post=require("./post")
class Comment extends Model {}

Comment.init({
  content: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
  author: {
    type: DataTypes.UUID, 
    allowNull: false,
    references: {
      model: User,  
      key: 'id',
    },
  },
  post: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model:Post,
      key: 'id',
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Comment',
  tableName: 'comments',
  timestamps: false,
});

module.exports = Comment;
