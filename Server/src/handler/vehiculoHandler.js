const { 
    createVehicle, vehicleByPatente, getAllVehicles, updateVehicle, deleteVehicle
  } = require("../controllers/vehiculoController.js");
  
//CREA NUEVO USUARIO
const newVehicleHandler = async (req, res) => {
    const {patente, marca, modelo, año, nombre, apellido, telefono, fechaVTV } = req.body;
    if (!patente || !nombre) {
      return res.status(400).json({ message: "Patente y Nombre son Obligatorios." });
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
      return res.status(500).json({ message: "Algo paso" });
    }
  };

//OBTENER VEHICULOS
const getVehiclesHandler = async (req, res) =>{
  try {
    const cars = await getAllVehicles();
    if(!cars){
      return res.status(404).send("El vehiculo no existe")
    }
    return res.status(200).json(cars);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "Algo paso"})
    
  }
};

//BUSCAR VEHICULO POR PATENTE 
const getVehicleByPatenteHandler = async (req, res) => {
  const { patente } = req.params
  try {
    const car = await vehicleByPatente(patente);
    return res.status(200).json(car)    
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "Vehiculo no existe"})
  }
};

//ACTUALIZAR VEHICULO
const updateVehicleHandler = async (req, res) => {
  const { patente } = req.params;
  const vehicleData = req.body
  try {
    const vehicleUpdate = await updateVehicle(patente, vehicleData);
    return res.status(200).json(vehicleUpdate)
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "Algo paso"})    
  }
};

//ELIMINAR VEHICULO
const deleteVehicleHandler = async (req, res) => {
    const { patente } = req.params;
  try {
    const deleter = await deleteVehicle(patente);
    return res.status(200).json(deleter); 
    
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error al Borrar")
  }
};

module.exports = {
    newVehicleHandler,
    getVehicleByPatenteHandler,
    getVehiclesHandler,
    deleteVehicleHandler,
    updateVehicleHandler,
};
