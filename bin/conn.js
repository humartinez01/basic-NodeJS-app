/**
 * Created by frosales on 26/06/2017.
 */
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('.env');

const client = properties.get('config_db.default.connection')
const host = properties.get('config_db.default.host')
const port = properties.get('config_db.default.port')
const database = properties.get('config_db.default.database')
const user = properties.get('config_db.default.username')
const password = properties.get('config_db.default.password')
const charset = properties.get('config_db.default.charset')

const knex = require('knex')({
    client: client,
    connection: {
        host     : host,
        user     : user,
        port     : port,
        password : password,
        database : database,
        charset  : charset
    }
});

const bookshelf = require('bookshelf')(knex);

exports.conn = function(){
    return bookshelf
}