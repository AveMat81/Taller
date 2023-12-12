const { Router } = require('express');
const userRouter = require('./userRoutes');
const vehicleRouter = require('./vehicleRoutes');
const otRouter = require('./otRoutes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/user", userRouter);
router.use("/vehicle", vehicleRouter);
router.use("/ot", otRouter);

module.exports = router;