import { Model, modelNames, Schema } from "mongoose";
import { IUser } from "../interfaces/IUser";




export default class BaseController {

    /**
     * _findById: Search the database to find the first document with a matching _id.
     * @param _id: The unique identifier of an object
     * @param modelName: Referrencing the collection of documents.
     * @returns The data found on the database or null when the data is missing
     */
    
    static async _findById(_id: Schema.Types.ObjectId, modelName: Model<any>): Promise<IUser | null>{
        return await modelName.findById(_id);
    }

    static async _findOne(filter: object, modelName: Model<any>): Promise<IUser | null> {
        return await modelName.findOne(filter);
    }

    static async _create(data: object, modelName: Model<any>): Promise<IUser | null> {
        return await modelName.create(data);
    }

    static async _find(filter: object | undefined, modelName: Model<any> ): Promise<IUser[] | null> {
        return await modelName.find(filter || {});
    }
};