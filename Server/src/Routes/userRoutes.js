const { Router } = require("express");
const{
    newUserHandler, getAllUsersHandler, getUserByIdHandler, updateUserHandler, deleteUserHandler
} = require("../Handler/userHandler");

const userRouter = Router();

userRouter.post("/", newUserHandler);
userRouter.get("/", getAllUsersHandler);
userRouter.get("/:id", getUserByIdHandler);
userRouter.put("/:id", updateUserHandler);
userRouter.delete("/:id", deleteUserHandler);

module.exports = userRouter;