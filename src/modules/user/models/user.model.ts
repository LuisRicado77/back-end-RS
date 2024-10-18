import { Schema,model } from "mongoose";
import { Iuser } from "../interface/user.interface";

const userSchema = new Schema<Iuser>({
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: {type:String, required: true},
    name: { type: String, required: true },
    lastName: { type: String, required: true },
})
