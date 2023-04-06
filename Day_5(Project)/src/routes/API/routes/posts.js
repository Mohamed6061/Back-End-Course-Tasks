const {express} = require("../../../../index");
const postsAPIRouter = express.Router();
const { query_runner, query_error } = require("../../../helpers/mysql_helpers");
const poolPromised = require(".././../../../mysql")

postsAPIRouter.get("/", (req, res) => {
        console.log(" im in posts get")
        query_runner("SELECT * FROM posts")
                .then(
                        ([rows]) => {
                                res.json(rows);
                        }
                )
                .catch((err) => res.json(query_error(err.message)));
});
postsAPIRouter.post("/", (req, res) => {
                console.log(req.body)
                const { id , title , content   } = req.body;
                const sql = `INSERT INTO posts ( id , title , content , author_id) VALUES (?, ?, ?, 1 )`;
        
                poolPromised.query(sql, [id, title, content ], (err, result) => {
                        if (err) {
                                reject(err);
                        } else {
                                resolve(result);
                        }
                })
                        .then(() => {
                                res.send('<script>alert("post added successfully"); window.location.href="/posts";</script>');
                        })
                        .catch((error) => {
                                console.log(error);
                                res.send(`<script>alert("Error adding post ); window.location.href="/posts";</script>`);
                        });
        });

module.exports = postsAPIRouter;
