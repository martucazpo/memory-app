const router = require("express").Router();
const addMaterialController = require("../controllers/addMaterial");

router.route("/tableName").post(addMaterialController.createNewTable);

router.route("/:tableName").post(addMaterialController.AddMaterial);

module.exports = router;
