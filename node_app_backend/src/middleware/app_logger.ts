


import express from "express";

let appLogger = (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const url = request.url;
    const method = request.method;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();


    const result: string = `${url} | ${method} | ${date} | ${time}`;

    console.log(request);

    next();
};

export default appLogger;