import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/myappdb',
    function (error) {
        if (error) { console.log(error); }
    }
);

// Application-level middleware
app.use('/api', routes);

function hello(req, res) {
    res.send("Hello World");
}
app.get("/", hello);

app.listen(PORT, function () {
    console.log(`App running  on http://localhost:${PORT}`)
})