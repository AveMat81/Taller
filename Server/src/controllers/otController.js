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
  const getAllOt = async (req, res) => {
    try {
      const ordendetrabajo = await Ot.findAll();
      return ordendetrabajo
    } catch (error) {
      return res.status(500).json({ error: 'Error to get all OT' });
    }
  };

  
//OBTENER OT POR PATENTE
const getOtByPatente = async (patente) =>{
    try {
         const ordendetrabajo = await Ot.findOne({
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

   
    //   const updateOt = async (patente, OtData) => {
        
    //     try {
    //       const [updated] = await Ot.update(OtData, { where: { patente } });
    //       if (updated) {
    //         const updatedOt = await Ot.findOne({
    //             where  :{patente}});
    //         return updatedOt;
    //       }
    //     } catch (error) {
    //       console.error(error.message);
    //       throw error;
    //     }
    //   };
      
    //     const deleteOt = async (numero_ot) => {
          
    //       try {
    //         const deleted = await Ot.destroy({ where: { numero_ot } });
    //         if (deleted) {
    //           return deleted;
    //         }
    //       } catch (error) {
    //         console.error(error.message)
    //       }
    //     };

module.exports = {
     createOt,
     getAllOt,
     getOtByPatente,
    //  updateOt,
    //  deleteOt
}

    // patente: 
    // fecha: 
    // numero_ot: 
    // observaciones: 
    // estado: 
 