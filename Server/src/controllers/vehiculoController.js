const { Vehiculo } = require('../db.js');



//CREA NUEVO VEHICULO
const createVehicle = async ( patente, marca, modelo, año, nombre, apellido, telefono, fechaVTV ) => {
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

  //BUSCAR TODOS LOS VEHICULO

  const getAllVehicles = async () => {
    try {
      const cars = await Vehiculo.findAll();
      if (!cars) {
        return "There is no cars yet";
      }
      return cars;
    } catch (error) {
      console.log(error.message);
    }
  }

  //BUSCAR VEHICULO POR PATENTE

  const vehicleByPatente = async (patente) => {
    try {
      const coche = await Vehiculo.findOne({
        where: { patente },
      });
      
      return coche
      
    } catch (error) {
      console.error(error.message);
      throw error;
    }
    
  }


  module.exports = {
    createVehicle,
    vehicleByPatente,
    getAllVehicles
  }
