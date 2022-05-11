import mongoose from "mongoose";
import { connectToDB, UserModel } from './db.js';

connectToDB().catch(err => console.log(err));

function deleteUser(id, callback) {
    UserModel.deleteOne({ _id: id }, function (error, data) {
        if (error) {
            return callback(error);
        }
        return callback(data);
    });
}

deleteUser("627b67cc325343a6faa11562", (result) => {
    console.log("Delete User", result);
    mongoose.connection.close();
});



