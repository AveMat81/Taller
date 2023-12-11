const { Vehiculo } = require('../db.js');



//CREA NUEVO VEHICULO
const createVehicle = async (patente, marca, modelo,año, nombre,apellido,telefono,fechaVTV) => {
    try {
      const coche = await Vehiculo.create ({
        patente,
        marca,
        modelo,
        año,
        nombre,
        apellido,
        telefono,
        fechaVTV
      });
      return coche;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  module.exports = {
    createVehicle
  }


//   patente:
//   marca:
//   modelo:
//   año: 
//   nombre:
//   apellido: 
//   telefono:
//   fechaVTV: