// MySQL
// ============================================================
let mysql = require("mysql");

const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function(err) {
    if(err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
})

module.exports = connection;