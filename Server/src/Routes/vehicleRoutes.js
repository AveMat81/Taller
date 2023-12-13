const { Router } = require("express");
const { 
    newVehicleHandler, getVehicleByPatenteHandler, getVehiclesHandler, updateVehicleHandler, deleteVehicleHandler
} = require("../handler/vehiculoHandler.js");

const vehicleRouter = Router();

vehicleRouter.post("/", newVehicleHandler);
vehicleRouter.get("/", getVehiclesHandler);
vehicleRouter.get("/:patente", getVehicleByPatenteHandler);
vehicleRouter.put("/:patente", updateVehicleHandler);
vehicleRouter.delete("/:patente", deleteVehicleHandler);

module.exports = vehicleRouter;