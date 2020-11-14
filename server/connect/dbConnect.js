if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
  }
const app = require('express');

const { Sequelize } = require("sequelize");
const db = require('../models')
const sequelize = new Sequelize("", process.env.USER, process.env.PASSWORD, {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    allowPublicKeyRetrieval: true,
    timezone: "Etc/GMT0",
  },
});
sequelize.query("CREATE DATABASE IF NOT EXISTS memory_app;").then(() => {
  db.sequelize
    .authenticate()
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));
});

module.exports = app;