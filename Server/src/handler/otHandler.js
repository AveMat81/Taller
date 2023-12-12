const { 
    createOt , getAllOt, getOtByPatente, updateOt, deleteOt, getOtByNumeroOt
  } = require("../controllers/otController");
  
  
  //CREA NUEVA OT
  const newOtHandler = async (req, res) => {
    const { patente, fecha, numero_ot, observaciones, estado } = req.body;
    if (!patente) {
      return res
        .status(400)
        .json({ message: "patente and numero de ot required fields." });
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
      return res.status(500).json({ message: "Something went wrong" });
    }
  };
  
  //OBTENER OTs
  
  const getAllOtHandler = async (req, res) => {
    
    try {
      const ots = await getAllOt();
      if(!ots){
        return res.status(404).send("ot not exist")
      }
      return res.status(200).json(ots);
  
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({message: "Something went wrong"})
      
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
      return res.status(500).json({message: "patente not exist"})
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
      return res.status(500).json({message: "Ot not exist"})
    }
  };
  
//   //ACTUALIZANDO USUARIO
  
  const updateOtHandler = async (req, res) => {
    const { numero_ot } = req.params;
    const otData = req.body
  
    try {
      const otUpdate = await updateOt(numero_ot, otData);
      return res.status(200).json(otUpdate)
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({message: "Something went wrong"})    
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
      return res.status(500).send("Error to deleted")
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
    // patente: 
    // fecha: 
    // numero_ot: 
    // observaciones: 
    // estado: 
 