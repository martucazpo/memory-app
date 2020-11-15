const createTablesFunctions = require('../javascript/createTablesFunctions');
const addMaterialsFunctions = require('../javascript/addMaterialsFunctions');

module.exports = {
  createNewTable: async function (req, res) {
    let tableName = req.body.tableName;
    createTablesFunctions.createNewTable(res, tableName);
  },
  AddMaterial: function (req, res) {
    let modelName = req.params.tableName + 's';
    let text1 = req.body.text1;
    let text2 = req.body.text2;
    addMaterialsFunctions.addMaterial(res, modelName, text1, text2);
  }
};
