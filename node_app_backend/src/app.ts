
import express from "express";
import cors from "cors";
import { ConnectToDatabase } from "./config/mongodb_client";
import appLogger from "./middleware/app_logger";
import userRouter from "./router/user_router";


const app: express.Application = express();


app.use(cors());

app.use(express.json());

app.use(appLogger);

app.use(express.urlencoded({ extended: false }));

app.use("/v1/user", userRouter);

const hostname = "localhost";
const portNumber = 5001;


app.listen(portNumber, hostname, async () => {
    await ConnectToDatabase();
    console.log(`http://${hostname}:${portNumber}`);
    console.log("Welcom to App backEnd Service");
});