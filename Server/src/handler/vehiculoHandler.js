const { 
    createVehicle, vehicleByPatente, getAllVehicles, updateVehicle, deleteVehicle
  } = require("../controllers/vehiculoController.js");
  

  //CREA NUEVO USUARIO
const newVehicleHandler = async (req, res) => {
    const {patente, marca, modelo, año, nombre, apellido, telefono, fechaVTV } = req.body;
    if (!patente || !nombre) {
      return res.status(400).json({ message: "Patente or Name, required fields." });
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

//OBTENER VEHICULOS

const getVehiclesHandler = async (req, res) =>{

  try {
    const cars = await getAllVehicles();
    if(!cars){
      return res.status(404).send("Cars not exist")
    }
    return res.status(200).json(cars);

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "Something went wrong"})
    
  }
}

  //BUSCAR VEHICULO POR PATENTE
  
const getVehicleByPatenteHandler = async (req, res) => {

  const { patente } = req.params
  try {
    const car = await vehicleByPatente(patente);
    return res.status(200).json(car)    
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "Car not exist"})
  }
}

//ACTUALIZAR VEHICULO

const updateVehicleHandler = async (req, res) => {
  const { patente } = req.params;
  const vehicleData = req.body

  try {
    const vehicleUpdate = await updateVehicle(patente, vehicleData);
    return res.status(200).json(vehicleUpdate)
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "Something went wrong"})    
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
    return res.status(500).send("Error to deleted")
  }
};



module.exports = {
    newVehicleHandler,
    getVehicleByPatenteHandler,
    getVehiclesHandler,
    deleteVehicleHandler,
    updateVehicleHandler,
};
