import express from "express";
import appLogger from "../app_logger/app_logger";
import bcrypt from 'bcrypt';
import { body, validationResult } from "express-validator";
const userRouting = express.Router();



// // user level middleware
// userRouting.use((req: express.Request, res: express.Response, next: express.NextFunction) => {

//     console.log(new Date().toLocaleDateString());
//     console.log(new Date().toLocaleTimeString());
//     console.log(req.method);
//     next();
// });



// rest Api
userRouting.get('/', (req: express.Request, res: express.Response) => {

    res.status(200);
    res.send(`<h1>welcome to express server Get</h1>`);
});



userRouting.post('/', (req: express.Request, res: express.Response) => {

    res.status(200);
    res.send(`<h1>welcome to express server Post</h1>`);
});



userRouting.put('/update', (req: express.Request, res: express.Response) => {

    res.status(200);
    res.send(`<h1>welcome to express server Put</h1>`);
});



userRouting.delete('/', (req: express.Request, res: express.Response) => {

    res.status(200);
    res.send(`<h1>welcome to express server Delete</h1>`);
});

userRouting.post('/login', appLogger, (request: express.Request, response: express.Response) => {

    let body = request.body;

    let { email, pass } = request.body;
    // response.status(200).json(body);

    if (email === "omjamnekar@gmail.com" && pass === "123456") {

        response.status(200).json({
            "status": response.statusCode, "data": body, "msg": "user login successfully"
        });


    } else {
        response.status(401).json({ "status": response.statusCode, "data": body, "msg": "invail email password" });
    }


});
userRouting.post('/createNewUser', [
    body('email').not().isEmpty().isEmail().withMessage("email required"),
    body("name").not().isEmpty(),
    body("pass").not().isEmpty().withMessage("please fill up the password"),
],

    appLogger, async (request: express.Request, response: express.Response) => {

        let body = request.body;
        let { email, pass } = request.body;

        let error = validationResult(request);

        if (!error.isEmpty()) {

            response.status(400).json({
                "status": response.statusCode, "data": error,
            });
        } else {

        }
        // response.status(200).json(body);
        let salt = await bcrypt.genSalt();
        let hashPassword = await bcrypt.hash(pass, salt);
        response.status(200).json({
            "status": response.statusCode, "data": body, "hashpassaword": hashPassword
        });



    });


export default userRouting;