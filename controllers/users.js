/**
 * Created by frosales on 22/06/2017.
 */

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_cmsproject"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

var list = null

exports.index = function(req, res) {

    var sql = "SELECT * FROM USERS";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result)
    });

    return list

};