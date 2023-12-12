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


  const updateVehicle = async (patente, vehicleData) => {
        
    try {
      const [updated] = await Vehiculo.update(vehicleData, { where: { patente } });
      if (updated) {
        const updatedVehicle = await Vehiculo.findByPk(patente);
        return updatedVehicle;
      }
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };
  
  
  const deleteVehicle = async (patente) => {
        try {
        const deleted = await Vehiculo.destroy({ where: { patente } });
        if (deleted) {
          return deleted;
        }
      } catch (error) {
        console.error(error.message)
      }
    };






  module.exports = {
    createVehicle,
    vehicleByPatente,
    getAllVehicles,
    updateVehicle,
    deleteVehicle,
  }
