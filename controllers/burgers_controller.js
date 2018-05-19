let express = require("express");
let router = express.Router();

let burger = require("../models/burger.js");

// Routes
// Show All 
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Create New
router.post("/api/burgers", function(req, res) {
    console.log(req.body)
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        // Send back ID
        res.json({ id: result.insertId });
    });
});

// Delete 
router.delete("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.delete(condition, function(result) {
        
        if (result.changedrows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export to server
module.exports = router;