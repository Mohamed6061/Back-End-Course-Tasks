const { express } = require("../../index");
const UsersRoute = express.Router();
const { query_runner, query_error } = require("../helpers/mysql_helpers");

UsersRoute.get("/", (req, res) => {
    console.log(" im in posts get")
    query_runner("SELECT * FROM posts")
            .then(
                    ([rows]) => {
                            // console.log(rows);
                            return res.render("home", { posts: rows, page_title: "home" })
                    }
            )
            .catch((err) => res.json(query_error(err.message)));
});
UsersRoute.post("/", (req, res) => {
    console.log(" im in posts post")

    query_runner("SELECT * FROM posts")
            .then(([rows]) => res.render("home", { posts: rows, page_title: "home" }))
            .catch((err) => res.json(query_error(err.message)));

});

module.exports = UsersRoute;
