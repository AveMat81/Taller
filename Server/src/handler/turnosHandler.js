const { 
    createTurno, getTurnos, getTurnoByPatente, deleteTurno, updateTurno
  } = require("../controllers/turnosController");
    
//CREA NUEVO TURNO
const newTurnoHandler = async (req, res) => {
    const { patente, fecha, hora, observaciones } = req.body;
    if (!patente) {
      return res.status(400).json({ message: "Es obligatorio la patente." });
    }
  
    try {
      const newTurno = await createTurno(
        patente,
        fecha,
        hora,
        observaciones
      );
      res.status(201).json(newTurno);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ message: "Algo paso" });
    }
  };

//BUSCA TURNO POR FECHA
const getTurnoByFechaHandler = async (req, res) =>{
    const { fecha } = req.params;
    console.log(fecha)
    try {
        const turnos = await getTurnos(fecha);
        if(!turnos){
            return res.status(404).send("No hay Turnos")
        }
        return res.status(200).json(turnos);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({message: "Algo paso"})
    }
  } 

//OBTENER TURNOS POR PATENTE  
  const getTurnoByPatenteHandler = async (req, res) => {
    const { patente } = req.params;
    try {
      const turnos = await getTurnoByPatente ( patente );
      if (!turnos) {
        return res.status(404).send("No hay turnos para esa patente")
      }
      return res.status(200).json(turnos);
    } catch (error) {
      console.error(error.message)
      return res.status(500).json({message: "Algo paso"})
    }  
  };

//ACTUALIZANDO TURNO  
const updateTurnoHandler = async (req, res) => {
  const { id } = req.params;
  const turnoData = req.body
  try {
    const turnoUpdate = await updateTurno(id, turnoData);
    return res.status(200).json(turnoUpdate)
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "Algo paso"})    
  }
};

//BORRAR POR ID
const deleteTurnoHandler = async (req, res) => {
    const { id } = req.params;
  try {
    const deleter = await deleteTurno(id);
    return res.status(200).json(deleter); 
    
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error al Borrar")
  }
};

module.exports = {
    newTurnoHandler,
    getTurnoByFechaHandler,
    getTurnoByPatenteHandler,
    deleteTurnoHandler,
    updateTurnoHandler
}