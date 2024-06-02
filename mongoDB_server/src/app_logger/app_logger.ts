
import express from "express";

let appLogger = (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const time = new Date().toLocaleDateString();
    const date = new Date().toLocaleTimeString();
    const method = request.method;
    const url = request.url;


    console.log(`[${time}] | [${date}] | [${method}] | [${url}]`);
    next();
};

export default appLogger;