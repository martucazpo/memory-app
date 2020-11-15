const router = require('express').Router();
const addMaterialRoutes = require('./addMaterialRoutes');

router.use('/add', addMaterialRoutes);

module.exports = router;