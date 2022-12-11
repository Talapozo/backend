const { Planet } = require("../models/planet")
const { validationResult } = require("express-validator")
const axios = require('axios')

const crearPlanet = async (req, res) => {
    try {
        const err = validationResult(req) /////clase
        if (err.isEmpty()) {
            const item = new Planet(req.body)//le paso el objeto req.body item.save()                    //le digo que guarde
            await item.save()
            res.status(201).json({ item })   //que me muestre item
        } else {
            res.status(501).json({ err })
        }
    } catch (error) {
        res.status(501).json({ error })
    }
}

//vamos a ver los datos que creamos arriba
const verPlanet = async (req, res) => {
    const item = await Planet.find()
    res.status(200).json({ item })
}
//vamos a ver un solo planet eje 4
const verIdPlanet = async (req, res) => {
    const item = await Planet.findById(req.params.id)
    res.status(200).json({ item })
}

//vamos a modificar un registro
const modificarPlanet = async (req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await Planet.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({ msg: "se modifico el planeta" })
        } else {
            res.status(501).json({ err })
        }
    } catch (error) {
        res.status(501).json({ error })
    }
}

//delete eliminar registro
const eliminarPlanet = async (req, res) => {
    const item = await Planet.findByIdAndDelete(req.params.id)
    res.status(204).json({ msg: "Planet Eliminado: ", item })
}

const consumirApi = async (req, res) => {
    try {
        const respuesta = await axios.get('https://swapi.dev/api/planets');
        res.status(200).json({ resp: respuesta.data })
    } catch (error) {
        res.status(501).json({ error })
    }

}

module.exports = { crearPlanet, verPlanet, verIdPlanet, modificarPlanet, eliminarPlanet, consumirApi } //exportando index como una funcion no como objeto