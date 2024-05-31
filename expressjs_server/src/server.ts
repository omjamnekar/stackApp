

import express from 'express';

const app: express.Application = express();

const localhost: string = "localhost";

const postNumber: number = 5000;


app.listen(postNumber, localhost, () => {
    console.log("Welcome to express server");
});

