const { Usuario } = require('../db.js');
const { Op } = require("sequelize");


//CREA NUEVO USUARIO

// , email_verified, status
const createUser = async (nickname, email, picture, email_verified, status) => {
    try {
    //   const [user, created] = await Usuario.findOrCreate({
      const user = await Usuario.create({
        // where: {
        //   [Op.or]: [{ nickname }, { email }],
        // },
        //defaults: {
          nickname,
          email,
          picture,
          email_verified,
          status,
        //},
      });
  
    //   if (created) {
    //     console.log("Nuevo usuario creado:", user.dataValues);
    //   } else {
    //     console.log("El usuario ya existe");
    //   }
      return user;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };


  const getAllUsers = async (req, res) => {
    try {
      const users = await Usuario.findAll();
      return users
    } catch (error) {
      return res.status(500).json({ error: 'Error to get all user' });
    }
  };
  
  //OBTIENE USUARIO POR ID
    const getUserById = async (id) => {
      
      try {
        const user = await Usuario.findByPk(id);
        if (user) {
          return user;
        }
      } catch (error) {
        console.error(error.message);
        throw error;
      }
    };
   
   
      const updateUser = async (id, userData) => {
        
        try {
          const [updated] = await Usuario.update(userData, { where: { id } });
          if (updated) {
            const updatedUser = await Usuario.findByPk(id);
            return updatedUser;
          }
        } catch (error) {
          console.error(error.message);
          throw error;
        }
      };
      
        const deleteUser = async (id) => {
          
          try {
            const deleted = await Usuario.destroy({ where: { id } });
            if (deleted) {
              return deleted;
            }
          } catch (error) {
            console.error(error.message)
          }
        };

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}
