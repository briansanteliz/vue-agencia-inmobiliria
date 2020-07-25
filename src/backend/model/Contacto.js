const Sequelize = require("sequelize");
const db = require("../settings/database");


const Contacto = db.define("contactos", {
  nombre: {
    type: Sequelize.STRING,
  },
  correo: {
    type: Sequelize.STRING,
  },
  telefono: {
    type: Sequelize.STRING,
  },
  mensaje:{
    type:Sequelize.STRING
  },
  opcion:{
    type:Sequelize.STRING
  },
  cantidad:{
    type:Sequelize.STRING
  },
  metodo:{
    type:Sequelize.STRING
  },
  fecha:{
    type:Sequelize.STRING
  },
  hora:{
    type:Sequelize.STRING
  }
});

module.exports = Contacto;
