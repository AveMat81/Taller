const { Ot } = require('../db.js');

//CREA NUEVO OT
const createOt = async (patente, fecha, numero_ot, observaciones, estado) => {
    try {
      const ordendetrabajo = await Ot.create({
        patente, 
        fecha, 
        numero_ot, 
        observaciones, 
        estado, 
        });
      return ordendetrabajo;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

//OBTENER TODOS LAS OTs
  const getAllOt = async () => {
    try {
      const ordendetrabajo = await Ot.findAll();
      return ordendetrabajo
    } catch (error) {
      console.log(error.message);
    }
  };

  
//OBTENER OT POR PATENTE
const getOtByPatente = async (patente) =>{
    try {
         const ordendetrabajo = await Ot.findAll({
          where: { patente }
        });
        if (ordendetrabajo) {
          return ordendetrabajo;
        }
      } catch (error) {
        console.error(error.message);
        throw error;
    }
};
//OBTENER OT POR NUMERO DE OT
const getOtByNumeroOt = async (numero_ot) =>{
    try {
         const ordendetrabajo = await Ot.findAll({
          where: { numero_ot }
        });
        if (ordendetrabajo) {
          return ordendetrabajo;
        }
      } catch (error) {
        console.error(error.message);
        throw error;
    }
};

//ACTUALIZAR OT
const updateOt = async (numero_ot, OtData) => {        
        try {
          const [updated] = await Ot.update(OtData, { where: { numero_ot } });
          if (updated) {
            const updatedOt = await Ot.findOne({
                where  :{numero_ot}});
            return updatedOt;
          }
        } catch (error) {
          console.error(error.message);
          throw error;
        }
      };
      
//BORRAR OT
const deleteOt = async (numero_ot) => {          
          try {
            const deleted = await Ot.destroy({ where: { numero_ot } });
            if (deleted) {
              return deleted;
            }
          } catch (error) {
            console.error(error.message)
          }
        };

module.exports = {
     createOt,
     getAllOt,
     getOtByPatente,
     getOtByNumeroOt,
     updateOt,
     deleteOt
}
