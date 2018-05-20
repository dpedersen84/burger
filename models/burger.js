let orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            // console.log(res);
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            // console.log(res);
            cb(res);
        });
    },

    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            // console.log(res);
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            console.log("BURGER JS")
            console.log(res);
            cb(res);
        });
    }
};

// Export to controller
module.exports = burger;