const mongoose= require ("mongoose")  //libreria mongoose que utilizo para conctarme a la bd
require("dotenv").config() //agregando esto podemoS eliminar el script del connect


//funcion conectora asyncronica porque va a demorar y puede tener latencias
const conect = async ()=> {
    try{                        //string de conexion a la base se copio y se pego el string y se coloco la password
        await mongoose.connect(process.env.CONECTMONGO)//SE ELIMINO EL STRING Y SE PONE ESTO QUE LLAMA AL .ENV
        console.log("base de datos conectada")
    } catch {
        console.log("no se pudo conectar a la base de datos")
    }
}

module.exports = {conect} //exporto connect