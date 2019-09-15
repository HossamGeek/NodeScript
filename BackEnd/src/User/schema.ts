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

export const User: Model<UserModel> = model<UserModel>("User", UserSchema);
