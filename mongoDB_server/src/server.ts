

import express from 'express';
import userRouting from './routing/user_routing';
import appLogger from './app_logger/app_logger';




const app: express.Application = express();

const localhost: string = "localhost";

const postNumber: number = 5000;


app.use(express.json());
app.use(appLogger);
app.use("/v1/user", userRouting);


app.listen(postNumber, localhost, () => {
    console.log(`http://${localhost}:${postNumber}/v1/user/`);
    console.log("Welcome to mongo server");
});

