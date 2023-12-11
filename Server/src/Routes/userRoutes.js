const { Router } = require("express");
const{
    newUserHandler
} = require("../Handler/userHandler");

const userRouter = Router();

userRouter.post("/", newUserHandler);

module.exports = userRouter;