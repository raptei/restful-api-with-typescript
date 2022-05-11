import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose'

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/myappdb',
    function (error) {
        if (error) { console.log(error); }
    }
);

const UsersSchema = new mongoose.Schema({
    firstName: String,
    lastLame: String,
    email: String,
    age: Number,
    active: Boolean,
});

const UserModel = mongoose.model('Users', UsersSchema);

function createUser(req, res) {
    let user = new UserModel(req.body);
    user.save(function (error, data) {
        if (error) {
            return res.send(error);
        }
        return res.json(data);
    });
}
app.post("/users", createUser);

function getUsers(req, res) {
    UserModel.find({}, function (error, data) {
        if (error) {
            return res.send(error);
        }
        return res.json(data);
    });
}
app.get("/users", getUsers);

function getUser(req, res) {
    UserModel.findById({ _id: req.params.userId }, function (error, data) {
        if (error) {
            return res.send(error);
        }
        return res.json(data)
    });
}
app.get("/users/:userId", getUser);

function updateUser(req, res) {
    UserModel.findOneAndUpdate({ _id: req.params.userId },
        req.body,
        { new: true },
        function (error, data) {
            if (error) {
                return res.send(error);
            }
            return res.json(data);
        });
}
app.put("/users/:userId", updateUser);

function updateIsPublished(req, res) {
    UserModel.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true },
        function (error, data) {
            if (error) {
                return res.send(error);
            }
            return res.json(data);
        });
}
app.patch("/users/:userId", updateIsPublished);

function deleteUser(req, res) {
    UserModel.deleteOne({ _id: req.params.userId }, function (error, data) {
        if (error) {
            return res.send(error);
        }
        return res.json(data);
    });
}
app.delete("/users/:userId", deleteUser);


function hello(req, res) {
    res.send("Hello World");
}
app.get("/", hello);

app.listen(PORT, function () {
    console.log(`App running  on http://localhost:${PORT}`)
})