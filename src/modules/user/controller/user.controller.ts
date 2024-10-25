import { Types } from "mongoose";
import { IUser } from "../interface/user.interface";
import { UserModel } from "../models/user.model";

export const createUser = async (user: IUser) => {
    try {
        // Creacion en memoria
        const newUser = new UserModel(user);
        return await newUser.save();
    } catch (error) {
        throw new Error("Error could not save in database");
    }
};

export const getAllUsers = async () => {
    try {
        return await UserModel.find();
    } catch (error) {
        throw new Error("Error could not get the users stored");
    }
};

export const getUserById = async (id: string) => {
    try {
        return await UserModel.findById(id);
    } catch (error) {
        throw new Error("Error could not find the user");
    }
};