const { Turnos } = require('../db.js');
const { Op } = require('sequelize');


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
}

//TRAE LOS TURNOS 

// const getTurnos = async (fecha) =>{
//     try {
//         const turnos = await Turnos.findAll({
//             where: { fecha }
//         });
//         if (turnos) {
//          return turnos;
//         }
//     } catch (error) {
//       console.log(error.message);  
//       throw error;
//     }
// }

const getTurnos = async (fecha) => {
    try {
        const turnos = await Turnos.findAll({
            where: {
                fecha: {
                    [Op.eq]: fecha
                }
            }
        });
        console.log("Soy los turnos del controller", turnos)
        return turnos;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};


module.exports = {
    createTurno,
    getTurnos
}