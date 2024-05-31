import http, { IncomingMessage, ServerResponse } from "http";

import { AppRouting } from "../../routing_optimzation/src/routing/app_routing";




const hostName: string = "localhost"
const portNumber: number = 5000


http.createServer((request: IncomingMessage, res: ServerResponse) => {

    res.statusCode = 200;
    res.setHeader("content-type", "text/html")
    // let _url = request.url;
    // let queryParams = url.parse(_url!).query
    // let pathName = url.parse(_url!).pathname;
    // let filterQuery = queryParams?.split("data=").pop()!.replaceAll("%20", " ")
    // let user = new UserData()

    AppRouting.appRouting(request, res)


    //res.end()


}).listen(portNumber, hostName, () => {
    console.log("Hello Routing Optimization Server");
    console.log(`http://${hostName}:${portNumber}`)

});


