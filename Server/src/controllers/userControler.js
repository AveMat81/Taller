const { Usuario } = require('../db')
const { Op } = require("sequelize");


//CREA NUEVO USUARIO
const createUser = async (nickname, email, picture, email_verified, status) => {
    try {
      const [user, created] = await Usuario.findOrCreate({
        where: {
          [Op.or]: [{ nickname }, { email }],
        },
        defaults: {
          nickname,
          email,
          picture,
          email_verified,
          status,
        },
      });
  
      if (created) {
        console.log("Nuevo usuario creado:", user.dataValues);
      } else {
        console.log("El usuario ya existe");
      }
  
      return user;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };


module.exports = {
    createUser
}








  
//   const getAllUsers = async (req, res) => {
//     try {
//       const users = await User.findAll();
//       return res.status(200).json(users);
//     } catch (error) {
//       return res.status(500).json({ error: 'Error al obtener la lista de usuarios' });
//     }
//   };
  
//   const getUserById = async (req, res) => {
//     const { id } = req.params;
//     try {
//       const user = await User.findByPk(id);
//       if (user) {
//         return res.status(200).json(user);
//       } else {
//         return res.status(404).json({ error: 'Usuario no encontrado' });
//       }
//     } catch (error) {
//       return res.status(500).json({ error: 'Error al obtener el usuario' });
//     }
//   };
  
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
