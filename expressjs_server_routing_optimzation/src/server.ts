

import express from 'express';
import userRouting from './routing/user_routing';
import postRouting from './routing/post_routing';
import appLogger from './app_logger/app_logger';




const app: express.Application = express();

const localhost: string = "localhost";

const postNumber: number = 5000;


app.use(express.json());
app.use(appLogger);
app.use("/v1/user", userRouting);
app.use("/v1/post", postRouting);


app.listen(postNumber, localhost, () => {
    console.log(`http://${localhost}:${postNumber}/v1/user/update`);
    console.log("Welcome to express server routing optimzation");
});

