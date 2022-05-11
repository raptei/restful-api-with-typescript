
import mongoose from "mongoose";
import { connectToDB, UserModel } from './db.js';

connectToDB().catch(err => console.log(err));

async function addUser() {
    const newUser = new UserModel(
        {
            "firstName": "Ravid",
            "lastName": "Hurler",
            "email": "rhurler0@gnu.org",
            "age": 29,
            "active": true
        });

    const result = await newUser.save();
    return result;
}

const result = await addUser();
console.log("Add User", result);

mongoose.connection.close();