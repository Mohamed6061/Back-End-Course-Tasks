const { express } = require("../../../index");
const APIRouter = express.Router();
const usersAPIRouter = require("./routes/users");
const postsAPIRouter = require("./routes/posts");

APIRouter.use("/users", usersAPIRouter);
APIRouter.use("/posts", postsAPIRouter);

APIRouter.get("/", (req, res) => {
        res.status(200).json({
                "status": 200,
                "error": 0,
                "Usage": "Use /users or /posts to get data from our api",
        })
});


module.exports = APIRouter;
