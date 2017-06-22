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

    list = { key: 'value' }

    return list

};

exports.test = function(callback) {

    con.query("SELECT * FROM USERS", function(err, rows) {

        if (err)
            callback(err, null)
        else
            callback(null, rows)

    });
};