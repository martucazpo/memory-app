if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(routes);

const { Sequelize } = require("sequelize");
const db = require('./models')
const sequelize = new Sequelize("", process.env.USER, process.env.PASSWORD, {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    allowPublicKeyRetrieval: true,
    timezone: "Etc/GMT0",
  },
});
sequelize.query("CREATE DATABASE IF NOT EXISTS memory_app;").then(() => {
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`The server listens on port ${PORT}`));  
  });
  db.sequelize
    .authenticate()
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));
});
