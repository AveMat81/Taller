const { Usuario } = require('../db.js');
const { Op } = require("sequelize");


//CREA NUEVO USUARIO

const createUser = async (nickname, email, picture, email_verified, status) => {
    try {
      const user = await Usuario.create({
          nickname,
          email,
          picture,
          email_verified,
          status,

      });
      return user;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };


  const getAllUsers = async () => {
    try {
      const users = await User.findAll();
      if (!users) {
        return "There is no users yet";
      }
      return users;
    } catch (error) {
      console.log(error.message);
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
