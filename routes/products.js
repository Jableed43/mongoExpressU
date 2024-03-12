var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosController")

/* GET users listing. */
//Leer todos
router.get('/', productosController.getAll);
//Leer por id
router.get('/:id',(req,res,next)=>req.app.verifyToken(req,res,next), productosController.getById);
//Crear
router.post('/',(req,res,next)=>req.app.verifyToken(req,res,next), productosController.create);
//actualizar
router.put('/:id', productosController.update);
//eliminar
router.delete('/:id', productosController.delete);

module.exports = router;
