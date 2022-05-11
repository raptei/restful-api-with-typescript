import express from "express";
const app = express();
const port = 3000;

let users = [
    {
        id: 1,
        firstName: "Ravid",
        lastName: "Hurler",
        email: "rhurler0@gnu.org",
    },
    {
        id: 2,
        firstName: "Gaultiero",
        lastName: "By",
        email: "gby1@blogtalkradio.com",
    },

];

app.get('/users', (req, res) => {
    res.send(users).status(200);
})

app.get('/users/:userId', (req, res) => {
    const user = users.find((item) => item.id == req.params.userId)
    res.send(user).status(200);
})


app.post('/users', (req, res) => {
    users.push(req.body);
    res.sendStatus(201);
})


app.put('/users', (req, res) => {
    users.push(req.body)
    res.sendStatus(201);
})

app.delete('/users/:userId', (req, res) => {
    const users = users.map((item) => item.id !== req.params.userId);
    users.splice(0, req.params.userId);
    console.log(users);
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Server is Runnning on http://localhost:${port}`)
});