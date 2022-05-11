import mongoose from "mongoose";
import { connectToDB, UserModel } from './db.js';

connectToDB().catch(err => console.log(err));

async function updateUser(id, body) {
    const result = UserModel.findByIdAndUpdate({ _id: id }, body, { new: true });
    return result;
}

const result = await updateUser("627b853bfd17b6ae186119a0", {
    "firstName": "Ravid",
    "lastName": "Hurler",
    "email": "rhurler0@gnu.org",
    "age": 32,
    "active": false
})

console.log("Update User", result);
mongoose.connection.close();