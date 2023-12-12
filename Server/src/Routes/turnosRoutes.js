const { Router } = require("express");

const{
    newTurnoHandler, getTurnoByFechaHandler } = require("../handler/turnosHandler.js");


const turnosRouter = Router();

turnosRouter.post("/", newTurnoHandler);
turnosRouter.get("/:fecha", getTurnoByFechaHandler);
// turnosRouter.get("/vehiculo/:patente", getTurnoByPatenteHandler);
// turnosRouter.put("/:patente", updateOtHandler);
// turnosRouter.delete("/:patente", deleteTurnoHandler);

module.exports = turnosRouter;