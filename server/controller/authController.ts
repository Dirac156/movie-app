import { Request, Response } from "express";
import bcrypt from "bcrypt";
import BaseController from "./baseController";
import userModel from "../model/user.model";
import { IUser } from "../interfaces/IUser";


export default class AuthController extends BaseController {
    /**
     * Authenticate a user into the system
     * @param req 
     * @param res 
     * @returns 
     */
    static async login(req: Request, res: Response): Promise<Response | void > {
        try {
            const { email, password } = req.body;
            const user: IUser | null = await AuthController._findOne({ email }, userModel);
            if (!user)
                return res.status(401).json({ message: "Authentification failed! User doesn't exist" })

            if (!await bcrypt.compare(password, user?.password as string))
                return res.status(401).json({ message: "Autentification failed!"})
            // generate jwt token for 30 days
            res.status(200).json({ message: "Authentifiation was successful", data: user });
        }catch(err) {
            console.error(err);
            return res.status(500).json({});
        }
    }
    
    /**
     * create new user and save user into the database
     * @param req 
     * @param res 
     * @returns The user created | Null in case nothing was created.
     */
    
     static async signUp(req: Request, res: Response): Promise<void | Response> {
        try {
            const { name, email, password } = req.body;
            if (await AuthController._findOne({ email }, userModel))
                return res.status(400).json({ message: "user already exist"});
    
            // generate user
            const hashedPassword = await bcrypt.hash(password, 10);
    
            await AuthController._create({ name, email, password: hashedPassword }, userModel);
    
            return res.status(201).json({ message: "new user created!"})
            
        }catch(err){
            console.error(err);
            return res.status(500).json({});
        }
    }
};
