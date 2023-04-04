const express = require('express');
const multer = require("multer");
const bodyParser = require("body-parser");

const forms = multer();
const app = express();

let users = [{name: "Moemen"} , {name: "Mohamed"}];

app.use(bodyParser.urlencoded({extended: true}))
app.use(forms.array());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to home page');
});

app.post("/users/add", (req, res) => {
    // console.log(req.body)
    users.push(`{name : ${req.body.name}}`);
    res.send('User added successfully');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(8888, 'localhost', function () {
        console.log("server starting")
})
