

import * as fs from "fs";
import * as path from "path";

export class UserData {

    getAllUsers(calback: (response: string | undefined) => void): void {

        fs.readFile(path.join(__dirname, "../users_response.json"), "utf-8", (error, response) => {

            calback(response);
        });

    }

    createUser(name: string) {

        return "Hello" + name;
    }
}