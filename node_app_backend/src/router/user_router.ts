
import express from "express";
import { UserController } from "../controller/user_controller";

const userRouter: express.Router = express.Router();


// 
// SignUp
userRouter.post("/signUp", UserController.signUp);

userRouter.post("/signIn", UserController.signIn);


//

export default userRouter;