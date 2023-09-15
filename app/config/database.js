const { Sequelize } = require('sequelize');
require('dotenv').config();
const dbName = process.env.DB_NAME;
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(dbName, userName, password, {
  host,
  dialect,
});

module.exports = sequelize;