import mongoose from "mongoose";
import { db_url } from "./serverConfig.js";

export default async function connectDB() {
    try {
        await mongoose.connect(db_url);
        console.log("Connected to the DB");
        
    } catch (error) {
        console.log("Something went wrong in connectiong to the DB");
        console.log(error.message);
    }
}