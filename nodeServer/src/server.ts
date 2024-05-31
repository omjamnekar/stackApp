import http, { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';
import * as os from "os";
import * as fs from "fs";
import * as path from "path";
import { UserData } from './user/user_data';


const hostname: string = "localhost";
const portNumber: number = 5000;

http.createServer((req: IncomingMessage, res: ServerResponse) => {

    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    let _url = req.url;
    let pathName = url.parse(_url!).pathname;
    let user = new UserData();
    // let quert = url.parse(_url!).query; // parse convert data into readable
    // let filterQuer = quert?.split("data=").pop()!.replaceAll("%20", " ")!.replaceAll("%22", "");


    if (pathName === "/users") {

        res.write("Users");
        user.getAllUsers((result) => {
            res.end(`<pre>${result}</pre>`);
        });


    } else if (pathName === "/data") {
        res.write("data ");

    } else if (pathName === "/os") {
        let osMap = {
            odMem: os.totalmem(),
            homedir: os.homedir(),
            freeMem: os.freemem(),
            hostName: os.hostname()
        };
        res.write(`<h1>${osMap.hostName}</h1></br>`)

    } else if (pathName === "/fs") {


        fs.readFile(path.join(__dirname, "users_response.json"), "utf-8", (error, response) => {


            if (error) {
                res.write(`${error}`);
            }
            res.write(`<pre>${response}</pre>`);


            res.end();
        });


    }
    else if (pathName === "/createUser") {

        let data = user.createUser("MA");
        res.end(`${data}`);
    }

    else {
        res.write("path not found");
    }
    //system related data


})

    /////////////
    .listen(portNumber, hostname, () => {
        console.log("Hello My first Server");
        console.log(`http://${hostname}:${portNumber}`);
    });
///////////// 


