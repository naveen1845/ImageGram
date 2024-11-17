import dotenv from "dotenv";

dotenv.config({path : '../.env'});

export const db_url = process.env.db_url;