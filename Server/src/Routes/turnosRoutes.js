const { Router } = require("express");
const{
    newTurnoHandler, getTurnoByFechaHandler, getTurnoByPatenteHandler, deleteTurnoHandler, updateTurnoHandler 
} = require("../handler/turnosHandler.js");

const turnosRouter = Router();

turnosRouter.post("/", newTurnoHandler);
turnosRouter.get("/fecha/:fecha", getTurnoByFechaHandler);
turnosRouter.get("/vehiculo/:patente", getTurnoByPatenteHandler);
turnosRouter.put("/:id", updateTurnoHandler);
turnosRouter.delete("/:id", deleteTurnoHandler);

module.exports = turnosRouter;