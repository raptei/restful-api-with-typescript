import mongoose from "mongoose";
import { connectToDB, UserModel } from './db.js';

connectToDB().catch(err => console.log(err));

function getUsers(callback) {
    UserModel.find({}, function (error, data) {
        if (error) {
            return callback(error);
        }
        return callback(data);
    });
}

getUsers((result) => {
    console.log("Get Users", result);
    mongoose.connection.close();
});




