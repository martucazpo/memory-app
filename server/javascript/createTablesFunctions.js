const { DataTypes } = require("sequelize");
const { Sequelize } = require("../models");
const db = require("../models");

module.exports = {
    
  createNewTable:  async function (res,tableName) {
    if (tableName && tableName !== "undefined") {
      db.sequelize.define(tableName, {
        id: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
        },
        material: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null,
        },
      });
      await db.sequelize.sync().catch((err) => console.log(err));
      this.createTrigger(res, tableName);
    }
  },
  createTrigger: function (res, tableName) {
    let modelName = tableName + 's';
    db.sequelize
      .query(
        `CREATE TRIGGER before_insert_${modelName} BEFORE INSERT ON ${modelName}` +
          ` FOR EACH ROW` +
          ` BEGIN` +
          ` SET new.id = REPLACE(UUID(),'-','');` +
          `END;`
      )
      .then(res.sendStatus(200))
      .catch((err) => console.log(err));
  }
}