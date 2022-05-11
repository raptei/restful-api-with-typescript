import UserModel from "./users-model";

const createUser = (req, res) => {
    let user = new UserModel(req.body);
    user.save(function (error, data) {
        if (error) {
            return res.send(error);
        }
        return res.json(data);
    });
}

const getUsers = (req, res) => {
    UserModel.find({}, function (error, data) {
        if (error) {
            return res.send(error);
        }
        return res.json(data);
    });
}


const getUser = (req, res) => {
    UserModel.findById({ _id: req.params.userId }, function (error, data) {
        if (error) {
            return res.send(error);
        }
        return res.json(data)
    });
}


const updateUser = (req, res) => {
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


const updateIsPublished = (req, res) => {
    UserModel.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true },
        function (error, data) {
            if (error) {
                return res.send(error);
            }
            return res.json(data);
        });
}


const deleteUser = (req, res) => {
    UserModel.deleteOne({ _id: req.params.userId }, function (error, data) {
        if (error) {
            return res.send(error);
        }
        return res.json(data);
    });
}

export {createUser, getUsers,getUser,updateUser, updateIsPublished, deleteUser }