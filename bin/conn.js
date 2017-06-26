/**
 * Created by frosales on 26/06/2017.
 */

const knex = require('knex')({
    client: 'pg',
    connection: {
        host     : 'localhost',
        user     : 'postgres',
        port     : 5432,
        password : '123',
        database : 'db_postgres',
        charset  : 'utf8'
    }
});

const bookshelf = require('bookshelf')(knex);

exports.conn = function(){
    return bookshelf
}