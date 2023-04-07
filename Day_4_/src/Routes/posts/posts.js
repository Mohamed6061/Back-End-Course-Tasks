const Router = require("express").Router();
const db = require("../../../mysql-connector");
const { query_runner, create_error_object, done } = require("../../helpers/db-functions");

Router.get("/", (req, res) => {
        query_runner("SELECT * FROM posts")
                .then(rows => res.status(200).json(rows))
                .catch(err => res.status(500).json(create_error_object("db_error", err.message)))
});
Router.post("/", (req, res) => {
        const data = [
                req.body.id,
                req.body.title,
                req.body.content,
                req.body.author_id,
                req.body.image
        ];
        console.log(data);
        res.send(req.body)
        query_runner("INSERT INTO posts (id, title, content, author_id, image )  VALUES (?, 'we', ?, ?, ?)", data)
                .then(row => res.status(200).json(row))
                .catch(err => res.status(500).json(create_error_object("db_error", err.message)))
});
Router.delete("/:id", (req, res) => {
        query_runner("DELETE FROM posts WHERE id = ?", [req.params.id])
                .then( ({affectedRows}) => res.status(200).json(affectedRows > 0 
                                                                        ? done("post deleted successfully") 
                                                                        : done("post doesn't exist")))
                .catch(err => res.status(500)
                                        .json(create_error_object("db_error", err.message)));
})

Router.patch("/:id", (req, res) => {
        const data = [req.body.title, req.body.content]
        
        db.query("UPDATE posts SET title = ?, content = ? WHERE id = ?", [...data, req.params.id], (err, result) => {
                if (!err) {
                        res.status(200).json({
                                error: 0,
                                status: "operation done"
                        });
                        return;
                }
                res.status(500).json({
                        error: "user with that id is not found on db"
                })
        })
})
module.exports = Router;