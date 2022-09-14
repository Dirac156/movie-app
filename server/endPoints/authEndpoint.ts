import { Router } from "express";
import AuthController from "../controller/authController";
import { validateUserLogin, validateUserSignUp } from "../middleware/authMiddleware";

const authRouter = Router();

authRouter.post("/login", validateUserLogin, AuthController.login);
authRouter.post("/signup", validateUserSignUp, AuthController.signUp);

export default authRouter;