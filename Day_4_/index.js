const express = require("express")
const bodyParser = require("body-parser");
const multer = require("multer");
const HomeRouter = require("./src/Routes/Main");
const forms = multer();
const app = express();
const path = require("path");
const users = require("./src/Routes/Authors/Authors");
const posts = require("./src/Routes/posts/posts");
const profile = require("./src/Routes/profile/profile");

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(forms.array());
app.use(HomeRouter);

app.use("/users", users);
app.use("/posts", posts);
app.use("/profile", profile);

app.get("*", (req, res) => {
        console.log("Request Objected have been changed from middleware", req.myname);
        res.status(404).json({
                error: "Page not found", 
                status_code: 404, 
                fun_message: "You love to get errros"
        });
});

app.listen(8088, 'localhost', function () {
        console.log("server is up & running")
})

module.exports = app
