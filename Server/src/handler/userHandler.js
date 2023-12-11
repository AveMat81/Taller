const { 
  createUser, getAllUsers, getUserById, updateUser, deleteUser
} = require("../controllers/userControler");


//CREA NUEVO USUARIO
const newUserHandler = async (req, res) => {
  const { nickname, email, picture, email_verified, status } = req.body;
  if (!nickname || !email || !picture) {
    return res
      .status(400)
      .json({ message: "Nickname, email, and picture are required fields." });
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
    return res.status(500).json({ message: "Something went wrong" });
  }
};

//OBTENER USUARIOS

const getAllUsersHandler = async (req, res) => {
  
  try {
    const usuarios = await getAllUsers();
    if(!usuarios){
      return res.status(404).send("users not exist")
    }
    return res.status(200).json(usuarios);

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "Something went wrong"})
    
  }
};

//OBTENER USUARIO POR ID

const getUserByIdHandler = async (req, res) => {

  const { id } = req.params;
  try {
    const user = await getUserById(id);
    console.log(user)
    return res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "User not exist"})
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
    return res.status(500).json({message: "Something went wrong"})    
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
    return res.status(500).send("Error to deleted")
  }
};

module.exports = {
  newUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler
}