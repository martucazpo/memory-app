const db = require("../models");

module.exports = {
  addMaterial: function (res, modelName, text1, text2) {
    db.sequelize.query(
      `INSERT INTO ${modelName}(material, createdAt, updatedAt) VALUES ("${text1}", current_timestamp(), current_timestamp())`
    );

    db.sequelize.query(
      `INSERT INTO ${modelName}(material, createdAt, updatedAt) VALUES ("${text2}", current_timestamp(), current_timestamp())`
    );
    res.sendStatus(200);
  },
}
