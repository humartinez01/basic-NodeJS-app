/**
 * Created by frosales on 23/06/2017.
 */

const knex = require('knex')({
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

const bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
    tableName: 'users'
});

//new User({name: 'Fredwin Rosales', email: 'fredwinrosales@gmail.com'}).save().then(function(model) { console.log('Saved!') });

new User().fetchAll().then(function(user) {
    user.forEach(function (model) {
        console.log(model.attributes.name)
    })
}).catch(function(err) {
    console.error(err);
});

exports.test = function(callback) {

    new User().fetchAll().then(function(user) {

        callback(null, user)

    }).catch(function(err) {

        callback(err, null)

    });


};