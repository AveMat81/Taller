const { 
    createTurno, getTurnos
  } = require("../controllers/turnosController");
  
  
  //CREA NUEVO TURNO
  const newTurnoHandler = async (req, res) => {
    const { patente, fecha, hora, observaciones } = req.body;
    if (!patente) {
      return res.status(400).json({ message: "patente de turno required fields." });
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
      return res.status(500).json({ message: "Something went wrong" });
    }
  };

  //BUSCA TURNO POR FECHA

  const getTurnoByFechaHandler = async (req, res) =>{
    const { fecha } = req.params;
    console.log(fecha)
    try {
        const turnos = await getTurnos(fecha);
        if(!turnos){
            return res.status(404).send("Turn error")
        }
        return res.status(200).json(turnos);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({message: "Something went wrong"})
    }
  } 

  module.exports = {
    newTurnoHandler,
    getTurnoByFechaHandler
  }