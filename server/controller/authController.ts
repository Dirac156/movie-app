import { Request, Response } from "express";
import BaseController from "./baseController";
import userModel from "../model/user.model";
import JWT from "../services/jsonwebtoken";
import { IUser } from "../interfaces/IUser";
import bcrypt from "../services/bcrypt";


export default class AuthController extends BaseController {
    /**
     * Authenticate a user into the system
     * @param req 
     * @param res 
     * @returns 
     */
    static async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;
            const user: IUser | null = await AuthController._findOne({ email }, userModel);
            if (!user)
                return res.status(401).json({ message: "Authentification failed! User doesn't exist" })

            if (!await bcrypt.compare(password, user.password))
                return res.status(401).json({ message: "Autentification failed!"})

            const token = await JWT.sign({ email }, undefined, undefined);
            return res.status(200).json({ message: "Authentifiation was successful", token });
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
    
     static async signUp(req: Request, res: Response): Promise<Response> {
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

    /**
     * 
     * @param req 
     * @param res 
     */
    // static async refreshToken(req: Request, res: Response) {
	// 	try {
	// 		const { token } = req.body;
	// 		const tokenFromHeader = auth.getJwtToken(req);
	// 		const user = jwt.decode(tokenFromHeader);

	// 		if ((data.refreshToken) && (data.refreshToken in tokenList)) {
	// 			// const token = jwt.sign({ user }, config.auth.jwt_secret, { expiresIn: config.auth.jwt_expiresin, algorithm: 'HS512' });
	// 			// const response = {
	// 			// 	token,
	// 			// };
	// 			// // update the token in the list
	// 			// tokenList[data.refreshToken].token = token;
	// 		} else {
	// 			res.status(400).json({});
	// 		}
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// }
};
