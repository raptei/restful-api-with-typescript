import mongoose from "mongoose";

import { connectToDB, UserModel } from './db.js';

connectToDB().catch(err => console.log(err));

function addUser(user, callback) {
    const newUser = new UserModel(user);
    newUser.save((error, data) => {
        if (error) {
            return callback(error);
        }
        return callback(data);
    });
}

const newUser = {
    "firstName": "Ravid",
    "lastName": "Hurler",
    "email": "rhurler0@gnu.org",
    "age": 29,
    "active": true
};

addUser(newUser, (result) => {
    console.log("Add User", result);
    mongoose.connection.close();
});
