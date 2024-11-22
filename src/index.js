import express from  "express";
import connectDB from "./Config/dbConfig.js";
import apiRouter from "./Routers/apiRouter.js";

let PORT = 3000;

const app = express();

app.listen(PORT , () => {
    console.log("server listenting to the port : ", PORT);
    connectDB();
})

app.use('/api', apiRouter)


// app.post("/posts" , CloudinaryUploader.single('image'), createPost)


