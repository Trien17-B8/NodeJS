import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initRouter from "./router/router";
import connection from "./config/connectDB";
import dotenv from "dotenv";

dotenv.config();

let app = express();

connection();

viewEngine(app);
initRouter(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
