const { Router } = require('express');
const userRouter = require('./userRoutes');
const vehicleRouter = require('./vehicleRoutes');
const otRouter = require('./otRoutes');
const turnosRouter = require('./turnosRoutes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/usuario", userRouter);
router.use("/vehiculo", vehicleRouter);
router.use("/ot", otRouter);
router.use("/turnos", turnosRouter);

module.exports = router;