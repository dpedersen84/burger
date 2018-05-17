let express = require("express");
let router = express.Router();

let burger = require("../models/burger.js");

// Routes 
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let object = {
            burger: data
        };
        console.log(object);
        res.render("index", object);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        // Send back ID
        res.json({ id: result.insertId });
    });
});

module.exports = router;