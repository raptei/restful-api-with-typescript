import mongoose from "mongoose";
import { connectToDB, UserModel } from './db.js';

connectToDB().catch(err => console.log(err));

function updateUser(id, body, callback) {
    UserModel.findOneAndUpdate({ _id: id },
        body,
        { new: true },
        function (error, data) {
            if (error) {
                return callback(error);
            }
            return callback(data);
        });
}

const updatedUser = {
    "firstName": "Ravid",
    "lastName": "Hurler",
    "email": "rhurler0@gnu.org",
    "age": 32,
    "active": false
}

updateUser("627b81a0bfba1c13db4b4747", updatedUser, (result) => {
    console.log("Update User", result);
    mongoose.connection.close();
});

