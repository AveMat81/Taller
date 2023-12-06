const { 
  createUser
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
    return res.status(500).json({ message: "SSomething went wrong" });
  }
};

module.exports = {
  newUserHandler
}