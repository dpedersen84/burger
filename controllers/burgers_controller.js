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

module.exports = router;