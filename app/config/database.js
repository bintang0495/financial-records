const { Sequelize } = require('sequelize');
require('dotenv').config();
const dbName = process.env.DB_NAME;
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

console.log({
    dbName,
    userName,
    password,
    host,
    dialect,
})

const sequelize = new Sequelize(dbName, userName, password, {
  host,
  dialect,
});

async function testConnection() {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }
}

testConnection();