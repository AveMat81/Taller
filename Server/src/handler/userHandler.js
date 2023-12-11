const { 
  createUser, getAllUsers, getUserById
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
    const user = getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({message: "User not exist"})
  }
}

module.exports = {
  newUserHandler,
  getAllUsersHandler,
  getUserByIdHandler
}