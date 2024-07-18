import express from "express";
import { getDatabase } from "../data/mongodb_client";
import { Db, ObjectId } from "mongodb";
import { loadavg } from "os";
import appLogger from "../app_logger/app_logger";
const userRouting = express.Router();


// CURD - create / read / update / delete

userRouting.post("/addNewUser", appLogger, async (request: express.Request, response: express.Response) => {

    let db: Db = getDatabase();
    let userCollection = db.collection("user");
    let body = request.body;


    const data = await userCollection.insertOne(body);

    response.status(200).json(
        { "response": data }
    );

});

userRouting.get("/getUser", appLogger, async (request: express.Request, response: express.Response) => {

    let db = getDatabase();

    let userCollection = db.collection("user");

    let data = await userCollection.find({}).toArray();

    response.status(200).json({
        "response": data,
    });
});


userRouting.get("/getProfile/:id", appLogger, async (request: express.Request, response: express.Response) => {



    console.log("adfagrgasrdfv");
    let userId = request.params.id;
    console.log(userId);

    let db = getDatabase();

    let userCollection = db.collection("user");
    let data;

    if (typeof userId === "string") {

        data = await userCollection.find({ "_id": new ObjectId(userId as string) }).toArray();
    } else {
        data = ["no data found, please enter id in query"];
    }


    response.status(200).json({
        "response": data,
    });
});


userRouting.put("/updateUser", appLogger, async (request: express.Request, response: express.Response) => {

    let db = getDatabase();

    let userCollection = db.collection("user");

    const body = request.body;

    const userObject = {
        name: body.name,
        following: body.following,
        followers: body.followers

    };


    let data = await userCollection.updateOne({ "_id": new ObjectId(body.id) }, { $set: userObject });

    response.status(200).json({
        "response": data,
    });
});


userRouting.delete("/deletUser", appLogger, async (request: express.Request, response: express.Response) => {

    let db = getDatabase();

    let userCollection = db.collection("user")

    const userId = request.body.id;
    let data = await userCollection.deleteOne({ _id: new ObjectId(userId) });

    response.status(200).json({
        "response": data,
    });
});

export default userRouting;