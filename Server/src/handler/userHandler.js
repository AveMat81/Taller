module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
  };
  Integra el controlador en tu aplicación Express:
  
  En tu archivo principal de la aplicación (por ejemplo, app.js), importa el controlador y utiliza las funciones según sea necesario.
  
  javascript
  Copy code
  const express = require('express');
  const bodyParser = require('body-parser');
  const userController = require('./userController'); // Ajusta la ruta según la estructura de tu proyecto
  
  const app = express();
  const port = 3000;
  
  app.use(bodyParser.json());
  
  // Rutas
  app.post('/users', userController.createUser);
  app.get('/users', userController.getAllUsers);
  app.get('/users/:id', userController.getUserById);
  app.put('/users/:id', userController.updateUser);
  app.delete('/users/:id', userController.deleteUser);
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });