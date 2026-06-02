import e from "express";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = `${process.env.PORT}` || 8000;
import { DB } from "./config/db.js";
import routes from "./api/index.js";
import errorHandler from "./middleWares/errorHandler/errorHandler.js";

const app = express();
DB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);
app.use(errorHandler);

app.listen(port, (err) => {
    if (err) {
        console.log("error in running server on port:", port);
    }
    console.log("server is running on port:", port);
})