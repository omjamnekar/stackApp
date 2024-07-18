import { Db, MongoClient } from "mongodb";

let mongodb: Db;



export async function ConnectToDatabase() {
    const url = "mongodb://127.0.0.1:27017";

    const client = new MongoClient(url);
    mongodb = client.db("noteDB");

    console.log("mongoBD connected successfully");

}


export function getDatabase(): Db {
    return mongodb;
}