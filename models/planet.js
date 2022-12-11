const mongoose = require("mongoose")

const Schema = mongoose.Schema
const planetsSchema = new Schema ({
    name:{
        type:String,
        required: true
    },
    rotation_period:{
        type: Number,
        required: true
    },
    orbital_period:{
        type: Number,
        required:true
    },
    population:{
        type:Number,
        required:true
    },
    climate:{
        type:String,
        required:true
    },
    terrain:{
        type: String,
        required:true
    }    
})
const Planet = mongoose.model('Planet',planetsSchema)//el modelo se crea en mayuscula y singular
module.exports = {Planet}