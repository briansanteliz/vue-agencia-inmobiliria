const express = require("express");
const morgan = require("morgan");
const path = require("path");
const contacto = require("./routes/contacto");
const connect = require("./settings/database");
const app = express();

//configuracion
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//archvos estaticos
app.use(express.static(path.join(__dirname, "public")));

//rutas
app.use("/contacto", contacto);


//iniciando
app.listen(app.get('port'), async()=>{
    try{
        console.log(`Servidor en el puerto ${app.get('port')}`)
        await connect.authenticate();
        console.log('BD Conectada')
    }catch{
        throw new Error('no se puede conectad a la bd')
    }
})
