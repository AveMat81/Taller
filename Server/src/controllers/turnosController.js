const { Turnos } = require('../db.js');
const { Op } = require('sequelize');

//CREAR UN TURNO
const createTurno = async (patente, fecha, hora, observaciones) =>{
try {
    const turno = await Turnos.create({
        patente,
        fecha,
        hora,
        observaciones
    });
    return turno;
} catch (error) {
    console.error(error.message);
    throw error;
}
};

//TRAER TURNOS POR FECHA
const getTurnos = async (fecha) => {
    try {
        const turnos = await Turnos.findAll({
            where: {
                fecha: {
                    [Op.eq]: fecha
                }
            }
        });
        return turnos;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

//TRAER TURNOS POR PATENTE
const getTurnoByPatente = async (patente) =>{
    try {
        const turnos = await Turnos.findAll({
            where:{ patente }          
        })
        if (turnos){
            return turnos;
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

//ACTUALIZAR TURNO
 const updateTurno = async (id, turnoData) => {      
    try {
      const [updated] = await Turnos.update(turnoData, { where: { id } });
      if (updated) {
        const updatedTurno = await Turnos.findOne({
            where  :{id}});
        return updatedTurno;
      }
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

//BORRAR TURNO
 const deleteTurno = async (id) => {      
      try {
        const deleted = await Turnos.destroy({ where: { id } });
        if (deleted) {
          return deleted;
        }
      } catch (error) {
        console.error(error.message)
      }
    };

module.exports = {
    createTurno,
    getTurnos,
    getTurnoByPatente,
    deleteTurno,
    updateTurno
}