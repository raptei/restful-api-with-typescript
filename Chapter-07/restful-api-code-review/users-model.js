import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
    firstName: String,
    lastLame: String,
    email: String,
    age: Number,
    active: Boolean,
});

export const UserModel = mongoose.model('Users', UsersSchema);