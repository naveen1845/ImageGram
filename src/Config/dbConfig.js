import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function connectDB() {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connected to the DB");
        
    } catch (error) {
        console.log("Something went wrong in connectiong to the DB");
        console.log(error.message);
    }
}