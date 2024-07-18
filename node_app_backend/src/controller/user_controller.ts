import express from 'express';
import { getDatabase } from '../config/mongodb_client';
import { User } from '../models/user_models';
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';

export class UserController {

    static async signUp(request: express.Request, response: express.Response) {
        try {
            const db = getDatabase();
            const userCollection = db.collection("user");
            const user: User = request.body;

            const existingUser = await userCollection.findOne({ email: user.email });

            if (existingUser) {
                return response.status(400).json({
                    status: "Failure",
                    response: "Email Already Exist"
                });
            }

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);

            const responseData = await userCollection.insertOne(user);
            const objectId = responseData.insertedId;

            const userInfo = await userCollection.findOne({ _id: new ObjectId(objectId) });
            if (userInfo) {
                userInfo.password = ""; // Remove the password from the response
                return response.status(200).json({
                    status: "success",
                    response: userInfo
                });
            }

            return response.status(500).json({
                status: "Failure",
                response: "Failed to retrieve user after signup"
            });
        } catch (error) {
            console.error('SignUp Error:', error);
            return response.status(500).json({
                status: "Failure",
                response: "An error occurred during signup"
            });
        }
    }

    static async signIn(request: express.Request, response: express.Response) {
        try {
            const db = getDatabase();
            const userCollection = db.collection("user");
            const user: User = request.body;

            const existingUser = await userCollection.findOne({ email: user.email });
            if (!existingUser) {
                return response.status(403).json({
                    status: "Failure",
                    response: "No user is available"
                });
            }

            const isPasswordValid = await bcrypt.compare(user.password, existingUser.password);
            if (isPasswordValid) {
                existingUser.password = ""; // Remove the password from the response
                return response.status(200).json({
                    status: "success",
                    data: existingUser
                });
            }

            return response.status(403).json({
                status: "Failure",
                response: "Invalid Email or Password please check"
            });
        } catch (error) {
            console.error('SignIn Error:', error);
            return response.status(500).json({
                status: "Failure",
                response: "An error occurred during signin"
            });
        }
    }
}
