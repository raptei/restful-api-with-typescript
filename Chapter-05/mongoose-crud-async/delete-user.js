import mongoose from "mongoose";
import { connectToDB, UserModel } from './db.js';

connectToDB().catch(err => console.log(err));

async function deleteUser(id) {
    const result = UserModel.deleteOne({ _id: id });
    return result;
}

const result = await deleteUser("627b67cc325343a6faa11562");

console.log("Delete User", result);

mongoose.connection.close();