import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initDb } from "./db.js";

import userRouter from "./routes/userRoute.js"
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

dotenv.config();

initDb()

const port = process.env.PORT || 5000
const projectVersion = process.env.PROJECT_VERSION || 'v1'
const baseApiUrl = `/${projectVersion}/api`


app.use(cors());
app.use(express.json());


app.use(`${baseApiUrl}/auth`, userRouter)


app.use(errorHandler)

app.listen(port, () => {
  console.log("Server started on port " + port);
});