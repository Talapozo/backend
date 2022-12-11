var express = require('express');
var router = express.Router();
const { crearPlanet, verPlanet, verIdPlanet, modificarPlanet, eliminarPlanet, consumirApi } = require("../controllers/indexControllers")
const { validarId } = require("../middlewares/validarId")
const { check } = require("express-validator") ///clase 4


//router.get('/', index)
router.get('/ver', verPlanet) //listar registros
router.get('/ver/:id', validarId, verIdPlanet) //ver un registro - trae sola Planet que coincide con id


//post
router.post('/crear', [
    check("name").notEmpty().withMessage("El Campo Nombre de Planet es requerido").isLength({ min: 3, max: 20 }),
    check("rotation_period").notEmpty().withMessage("El Campo rotation_period es requerido"),
    check("orbital_period").notEmpty().withMessage("El Campo orbital_perioda es requerido"),
    check("population").notEmpty().withMessage("El Campo population es requerido"),
    check("climate").notEmpty().withMessage("El Campo climate es requerido"),
    check("terrain").notEmpty().withMessage("El Campo terrain es requerido")    
], crearPlanet)


//put modificar un registro
router.put('/modificar/:id', validarId, [
    check("name").notEmpty().withMessage("El Campo Nombre de Planet es requerido").isLength({ min: 3, max: 20 }),
    check("rotation_period").notEmpty().withMessage("El Campo rotation_period es requerido"),
    check("orbital_period").notEmpty().withMessage("El Campo orbital_perioda es requerido"),
    check("population").notEmpty().withMessage("El Campo population es requerido"),
    check("climate").notEmpty().withMessage("El Campo climate es requerido"),
    check("terrain").notEmpty().withMessage("El Campo terrain es requerido")    
], modificarPlanet)

//delete eliminar Planet
router.delete('/borrar/:id', validarId, eliminarPlanet)

//consumir api externa
router.get('/apiExterna', consumirApi)

module.exports = router;
