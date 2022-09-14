import { Schema, model } from "mongoose";
import appconfig from "../config/appconfig";
import { IUser } from "../interfaces/IUser";

const userschema = new Schema<IUser>({
    name: {
        type: String,
        index: true,
        required: true,
        minlength: [1, 'Must Have at least 1 character'],
        maxlength: [25, 'Must have at most 25 characters']
        // check if this is a valid name
    },
    email: {
        type: String,
        index: true,
        required: true,
        minlength: [3, 'Must have at least 3 characters'],
        maxlength: [25, 'Must have at most 25 characters']
        // check if this is a valid email address
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Must have at least 8 characters'],
        maxlength: [40, 'Must have at most 40 characters'],
        validate: {
            validator: (str: string) => {
                return new RegExp(appconfig.auth.password_regex).test(str);
            },
            message: props => `${props.value} is not a valid password!`
        }
    }
}, {
    timestamps: true
});

export default model<IUser>('user', userschema);