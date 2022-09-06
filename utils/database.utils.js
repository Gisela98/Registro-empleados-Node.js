const { Sequelize, DataTypes } = require("sequelize"); 

const db = new Sequelize({
dialect: "postgres",
host: "localhost",
username: "postgres",
password: "may0410",
port: 5432,
database: "blogs",
});

module.exports = { db, DataTypes };