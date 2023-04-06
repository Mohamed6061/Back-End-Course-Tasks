const { app } = require("./index");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const UsersRoute = require("./src/routes/users");
const postsRoute = require("./src/routes/posts");
const APIRouter = require("./src/routes/API/main");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer().array());
app.use("/users", UsersRoute);
app.use("/api", APIRouter);
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
        // console.log("ay haga")
        res.render("home");
})

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, 'views'));
