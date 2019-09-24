import { UserModel } from './schema';
import { Document, Schema, Model, model} from "mongoose";
import User from '../User/interface';


export interface UserModel extends User, Document {
    fullName(): string;
}

export const UserSchema: Schema = new Schema({
    createdAt: Date,
    email: String,
    firstName: String,
    lastName: String
});

export const User: Model<Document> = model<Document>("User", UserSchema);


