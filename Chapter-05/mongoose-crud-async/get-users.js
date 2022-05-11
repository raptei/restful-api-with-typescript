
import mongoose from "mongoose";
import { connectToDB, UserModel } from './db.js';

connectToDB().catch(err => console.log(err));


async function getUsers() {
    const result = UserModel.find({});
    return result;
}

const result = await getUsers();
console.log("Get Users", result);

mongoose.connection.close();
