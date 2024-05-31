

import express from 'express';

const app: express.Application = express();

const localhost: string = "localhost";

const postNumber: number = 5000;

app.get('/', (req: express.Request, res: express.Response) => {

    res.status(200);
    res.send(`<h1>welcome to express server Get</h1>`);
});



app.post('/', (req: express.Request, res: express.Response) => {

    res.status(200);
    res.send(`<h1>welcome to express server Post</h1>`);
});



app.put('/', (req: express.Request, res: express.Response) => {

    res.status(200);
    res.send(`<h1>welcome to express server Put</h1>`);
});



app.delete('/', (req: express.Request, res: express.Response) => {

    res.status(200);
    res.send(`<h1>welcome to express server Delete</h1>`);
});




app.listen(postNumber, localhost, () => {
    console.log("Welcome to express server");
});

