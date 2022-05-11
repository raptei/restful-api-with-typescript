import mongoose from "mongoose";
import { connectToDB, UserModel } from './db.js';

connectToDB().catch(err => console.log(err));

async function getUser(id) {
    const result = UserModel.findById(id);
    return result;
}

const result = await getUser("627b853bfd17b6ae186119a0");
console.log("Get User", result);

mongoose.connection.close();