const { Router } = require("express");
const{ newVehicleHandler
    
} = require("../handler/vehiculoHandler.js");


const vehicleRouter = Router();

vehicleRouter.post("/", newVehicleHandler);


module.exports = vehicleRouter;