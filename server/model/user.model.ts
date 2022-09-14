import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/IUser";

const userschema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default model<IUser>('user', userschema);