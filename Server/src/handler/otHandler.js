const { 
    createOt , getAllOt, getOtByPatente, updateOt, deleteOt, getOtByNumeroOt
  } = require("../controllers/otController");
  
//CREA NUEVA OT
const newOtHandler = async (req, res) => {
    const { patente, fecha, numero_ot, observaciones, estado } = req.body;
    if (!patente) {
      return res
        .status(400)
        .json({ message: "es obligatorio cargar una patente." });
    }
  
    try {
      const newOt = await createOt(
        patente,
        fecha,
        numero_ot,
        observaciones,
        estado
      );
      res.status(201).json(newOt);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ message: "Algo paso" });
    }
  };
  
//OBTENER OTs 
const getAllOtHandler = async (req, res) => {    
    try {
      const ots = await getAllOt();
      if(!ots){
        return res.status(404).send("no hay OTs")
      }
      return res.status(200).json(ots);
  
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({message: "Algo paso"})
      
    }
  };
  
//OBTENER OTs POR PATENTE  
const getOtByPatenteHandler = async (req, res) => {  
    const { patente } = req.params;
    try {
      const ots = await getOtByPatente(patente);
      return res.status(200).json(ots);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({message: "No hay datos sobre esa patente"})
    }
  };

//OBTENER OTs POR NUMERO DE OT  
  const getOtByNumeroOtHandler = async (req, res) => {
    const { numero_ot } = req.params;
    try {
      const ots = await getOtByNumeroOt(numero_ot);
      return res.status(200).json(ots);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({message: "OT no encontrada"})
    }
  };
  
//ACTUALIZANDO OT
  const updateOtHandler = async (req, res) => {
    const { numero_ot } = req.params;
    const otData = req.body
  
    try {
      const otUpdate = await updateOt(numero_ot, otData);
      return res.status(200).json(otUpdate)
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({message: "Algo paso"})    
    }
  };
  
//BORRAR POR NUMERO_OT 
  const deleteOtHandler = async (req, res) => {
      const { numero_ot } = req.params;
    try {
      const deleter = await deleteOt(numero_ot);
      return res.status(200).json(deleter); 
      
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error al borrar")
    }
  };
  
  module.exports = {
    newOtHandler,
    getAllOtHandler,
    getOtByPatenteHandler,
    updateOtHandler,
    deleteOtHandler,
    getOtByNumeroOtHandler
  }
 