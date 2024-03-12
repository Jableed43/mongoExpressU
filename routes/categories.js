var express = require('express');
var router = express.Router();
const categoriesController = require("../controllers/categoriesController")

/* GET users listing. */
//Leer todos
router.get('/', categoriesController.getAll);
//Crear
router.post('/', categoriesController.create);

module.exports = router;
