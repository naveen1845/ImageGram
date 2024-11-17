import express from  "express";
import connectDB from "./Config/dbConfig.js";

let PORT = 3000;

const app = express();

app.listen(PORT , () => {
    console.log("server listenting to the port : ", PORT);
    connectDB();
})

app.get("/" , (req, res) => {
   return res.send("HOME");
})

app.get("/hello" , (req, res) => {
   return res.send("hello from Naveen");
})

app.get("/location" , (req, res) => {
   return res.send({city : "Navelim" , state : "Goa"});
})


