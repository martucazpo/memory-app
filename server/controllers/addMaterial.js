const addMaterialsFunctions = require('../javascript/addMaterialsFunctions');

module.exports = {
  createNewTable: async function (req, res) {
    let tableName = req.body.tableName;
    addMaterialsFunctions.createNewTable(res, tableName);
  },
  AddMaterial: function (req, res) {
    let modelName = req.body.tableName + "s";
    addMaterialsFunctions.addMaterial(res, modelName);
  }
};
