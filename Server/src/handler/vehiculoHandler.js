const { 
    createVehicle
  } = require("../controllers/vehiculoControler.js");
  

  //CREA NUEVO USUARIO
const newVehicleHandler = async (req, res) => {
    const {patente, marca, modelo, año, nombre, apellido, telefono, fechaVTV } = req.body;
    if (!patente || !nombre) {
      return res.status(400).json({ message: "Patente or Nombre, required fields." });
    }
  
    try {
      const newVehicle = await createVehicle(
        patente,
        marca,
        modelo,
        año,
        nombre,
        apellido,
        telefono,
        fechaVTV
      );
      return res.status(201).json(newVehicle);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };
  
module.exports = {
    newVehicleHandler
};
//   patente:
//   marca:
//   modelo:
//   año: 
//   nombre:
//   apellido: 
//   telefono:
//   fechaVTV: