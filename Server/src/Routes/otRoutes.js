const { Router } = require("express");
const{
    newOtHandler, getAllOtHandler, getOtByPatenteHandler, updateOtHandler, deleteOtHandler, getOtByNumeroOtHandler
} = require("../handler/otHandler.js");

const otRouter = Router();

otRouter.post("/", newOtHandler);
otRouter.get("/", getAllOtHandler);
otRouter.get("/:patente", getOtByPatenteHandler);
otRouter.get("/numero/:numero_ot", getOtByNumeroOtHandler);
otRouter.put("/:numero_ot", updateOtHandler);
otRouter.delete("/:numero_ot", deleteOtHandler);

module.exports = otRouter;