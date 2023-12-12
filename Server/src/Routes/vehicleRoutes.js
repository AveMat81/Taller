const { Router } = require("express");
const{ newVehicleHandler, getVehicleByPatenteHandler, getVehiclesHandler} = require("../handler/vehiculoHandler.js");


const vehicleRouter = Router();

vehicleRouter.post("/", newVehicleHandler);
vehicleRouter.get("/", getVehiclesHandler);
vehicleRouter.get("/:patente", getVehicleByPatenteHandler);


module.exports = vehicleRouter;