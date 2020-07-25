const Contacto = require("../model/Contacto");

const controller = async (req, res) => {
  await Contacto.create(req.body);
  res.status(200).json("Guardado correctamente");
};

module.exports = controller