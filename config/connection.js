// MySQL
// ============================================================
let mysql = require("mysql");

// const connection = mysql.createConnection({
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "burgers_db"
// });

let connection;
if(process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //Local Host
    connection = mysql.createConnection({
        root: 8080,
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if(err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
})

// Export to ORM
module.exports = connection;