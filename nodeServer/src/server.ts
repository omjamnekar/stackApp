import http, { IncomingMessage, ServerResponse } from 'http';



const hostname: string = "localhost";
const portNumber: number = 5000;

http.createServer((req: IncomingMessage, res: ServerResponse) => {

    res.statusCode = 200;
    res.setHeader("content-type", "text/html")
    res.write(`<h1>Hi om First server</h1></br><h2>${res.statusCode}</h2></br><h3>method:${req.method}</h3>`);
    res.end();
})

    /////////////
    .listen(portNumber, hostname, () => {
        console.log("Hello My first Server");
        console.log(`http://${hostname}:${portNumber}`);
    });
///////////// 

