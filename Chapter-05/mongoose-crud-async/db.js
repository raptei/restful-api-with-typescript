import mongoose from "mongoose";

async function connectToDB() {
    await mongoose.connect('mongodb://localhost:27017/dashboard');
};

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastLame: String,
    email: String,
    age: Number,
    active: Boolean,
});

const UserModel = mongoose.model('Users', usersSchema);

export { connectToDB, UserModel };