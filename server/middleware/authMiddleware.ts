import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import appconfig from "../config/appconfig";
import payloadValidator from "../services/joi";
import { validateRegex } from "../utils/regex";

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});

const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
});

const refreshTokenSchema = Joi.object({
    token: Joi.string().required()
})

const passwordValidator = validateRegex(
    appconfig.auth.password_regex
);

const userSchemaValidator = payloadValidator(userSchema);
const userLoginSchemaValidator= payloadValidator(userLoginSchema);
const refreshTokenSchemaValidator = payloadValidator(refreshTokenSchema);

export function validateUserSignUp(req: Request, res: Response, next: NextFunction): void {
    try {
        // validate user input
        const { error, value } = userSchemaValidator(req.body);
        if (error) {
            res.status(400).json( error.details );
            return;
        }
        // validate password and check if it's a strong password
        const { password } = value;
        if (!passwordValidator(password)) {
            res.status(400).json([{ message: "weak password"}])
            return;
        }
        next();
    }catch(err) {
        console.error(err);
        res.status(500).json({});
    }
}

export function validateUserLogin(req: Request, res: Response, next: NextFunction): void {
    try {
        // validate user input
        const { error } = userLoginSchemaValidator(req.body);
        if (error) {
            res.status(400).json( error.details );
            return;
        }
        next();
    }catch(err) {
        console.error(err);
        res.status(500).json({});
    }
}


export function validateRefreshToken(req: Request, res: Response, next: NextFunction): void {
    try {
        // validate user input
        const { error } = refreshTokenSchemaValidator(req.body);
        if (error) {
            res.status(400).json( error.details );
            return;
        }
        next();
    }catch(err) {
        console.error(err);
        res.status(500).json({});
    }
}
