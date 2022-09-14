import { Router } from "express";
import AuthController from "../controller/authController";
import { validateUserSignUp } from "../middleware/authMiddleware";

const authRouter = Router();

authRouter.post("/login", AuthController.login);
authRouter.post("/signup", validateUserSignUp, AuthController.signUp);

export default authRouter;