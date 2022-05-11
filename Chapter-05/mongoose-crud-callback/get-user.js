import mongoose from "mongoose";
import { connectToDB, UserModel } from './db.js';

connectToDB().catch(err => console.log(err));

function getUser(id, callback) {
    UserModel.findById({ _id: id }, function (error, data) {
        if (error) {
            return callback(error);
        }
        return callback(data);
    });
}

getUser("627b81a0bfba1c13db4b4747", (result) => {
    console.log("Get User", result);
    mongoose.connection.close();
});
