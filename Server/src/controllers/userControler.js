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
  
    const getUserById = async (id) => {
      
      try {
        const user = await Usuario.findByPk(id);
        console.log(id)
        if (user) {
          return user
        } else {
          return res.status(404).json({ error: 'User not found' });
        }
      } catch (error) {
        return res.status(500).json({ error: 'Error to get user' });
      }
    };


module.exports = {
    createUser,
    getAllUsers,
    getUserById
}








  
  
  
//   const updateUser = async (req, res) => {
//     const { id } = req.params;
//     try {
//       const [updated] = await User.update(req.body, { where: { id } });
//       if (updated) {
//         const updatedUser = await User.findByPk(id);
//         return res.status(200).json(updatedUser);
//       } else {
//         return res.status(404).json({ error: 'Usuario no encontrado' });
//       }
//     } catch (error) {
//       return res.status(500).json({ error: 'Error al actualizar el usuario' });
//     }
//   };
  
//   const deleteUser = async (req, res) => {
//     const { id } = req.params;
//     try {
//       const deleted = await User.destroy({ where: { id } });
//       if (deleted) {
//         return res.status(204).send();
//       } else {
//         return res.status(404).json({ error: 'Usuario no encontrado' });
//       }
//     } catch (error) {
//       return res.status(500).json({ error: 'Error al eliminar el usuario' });
//     }
//   };
  
//   module.exports = {
//     createUser,
//     getAllUsers,
//     getUserById,
//     updateUser,
//     deleteUser,
//   };
