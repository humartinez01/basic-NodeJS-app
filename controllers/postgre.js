/**
 * Created by frosales on 23/06/2017.
 */

var knex = require('knex')({
    client: 'pg',
    connection: {
        host     : 'localhost',
        user     : 'postgres',
        port     : 5433,
        password : '123',
        database : 'db_postgres',
        charset  : 'utf8'
    }
});

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
    tableName: 'users'
});

//new User({id: '1', name: 'Hola mundo'}).save().then(function(model) {
//    console.log('Saved!')
//});

new User().fetch().then(function(user) {
    console.log(user);
}).catch(function(err) {
    console.error(err);
});