const { Router } = require("express");
const{
    newUserHandler, getAllUsersHandler, getUserByIdHandler
} = require("../Handler/userHandler");


const userRouter = Router();

userRouter.post("/", newUserHandler);
userRouter.get("/", getAllUsersHandler);
userRouter.get("/:id", getUserByIdHandler);

module.exports = userRouter;