import { Request, Response, Router } from "express";
import authRouter from "./authEndpoint";

const api = Router();

api.use("/auth", authRouter);

api.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: true
    });
});

export default api;