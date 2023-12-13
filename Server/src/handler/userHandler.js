const { 
  createUser, getAllUsers, getUserById, updateUser, deleteUser
} = require("../controllers/userController");


//CREA NUEVO USUARIO
const newUserHandler = async (req, res) => {
  const { nickname, email, picture, email_verified, status } = req.body;
  if (!nickname || !email || !picture) {
    return res
      .status(400)
      .json({ message: "Nombre, email, y la foto es obligatorio." });
  }
  try {
    const newUser = await createUser(
      nickname,
      email,
      picture,
      email_verified,
      status
    );
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Algo paso" });
  }
};

//OBTENER USUARIOS
const getAllUsersHandler = async (req, res) => {  
  try {
    const usuarios = await getAllUsers();
    if(!usuarios){
      return res.status(404).send("Usuario no existe")
    }
    return res.status(200).json(usuarios);

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "Algo paso"})
    
  }
};

//OBTENER USUARIO POR ID
const getUserByIdHandler = async (req, res) => {

  const { id } = req.params;
  try {
    const user = await getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "ID no encontrada"})
  }
};

//ACTUALIZANDO USUARIO
const updateUserHandler = async (req, res) => {
  const { id } = req.params;
  const userData = req.body
  try {
    const userUpdate = await updateUser(id, userData);
    return res.status(200).json(userUpdate)
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "Algo paso"})    
  }
};

//BORRAR USUARIO X GATO
const deleteUserHandler = async (req, res) => {
    const { id } = req.params;
  try {
    const deleter = await deleteUser(id);
    return res.status(200).json(deleter); 
    
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error al Borrar")
  }
};

module.exports = {
  newUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler
}