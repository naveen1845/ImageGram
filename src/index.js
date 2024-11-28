import express, { text, urlencoded } from  "express";
import connectDB from "./Config/dbConfig.js";
import apiRouter from "./Routers/apiRouter.js";
import { isAuthenticated } from "./Middlewares/authMiddleware.js";
import { options } from "./Utils/swaggerOptions.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


let PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT , () => {
    console.log("server listenting to the port : ", PORT);
    connectDB();
})


const swaggerDoc = swaggerJSDoc(options);
// console.log(JSON.stringify(swaggerDoc, null, 2));    // this was just to check the swaggerDoc object
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use('/api', apiRouter)

app.use('/ping', isAuthenticated, function controller(req, res){
    return res.send({message: 'pong meri jaan'})
})


// app.post("/posts" , CloudinaryUploader.single('image'), createPost)


