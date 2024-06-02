
import { MongoClient, Db } from "mongodb";




let mongoDb: Db;


function connectToDatabase() {
    const url = "mongodb://localhost:27017";
    const client = new MongoClient(url);

    mongoDb = client.db("socialMedia");

}




function getDatabase(): Db {
    return mongoDb;
}

