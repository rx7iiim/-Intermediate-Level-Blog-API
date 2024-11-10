const { Sequelize } =require('sequelize');

// Replace with your PostgreSQL credentials
require('dotenv').config();
const url=process.env.DATABASE_AUTH;
const sequelize = new Sequelize(url, {
  dialect: 'postgres',
});

module.exports = sequelize;
