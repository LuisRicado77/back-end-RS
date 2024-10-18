import mongoose from "mongoose";

const initDatabase = async (uri: string) => {
    try {
        await mongoose.connect(uri);
        console.log("Database connected with success");
    } catch (error) {
        console.error(error);
        console.error("Could not connected to database");
    }
};

export { initDatabase };