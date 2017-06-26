/**
 * Created by frosales on 23/06/2017.
 */

const db = require('../bin/conn');

var User = db.conn().Model.extend({
    tableName: 'users'
});

/*
new User({name: 'Fredwin Rosales', email: 'fredwinrosales@gmail.com'}).save().then(function(model) {
    console.log('Saved!')
});

new User().fetchAll().then(function(user) {
    user.forEach(function (model) {
        console.log(model.attributes.name)
    })
}).catch(function(err) {
    console.error(err);
});
*/

exports.list = function(callback) {
    new User().fetchAll().then(function(user) {
        callback(null, user)
    }).catch(function(err) {
        callback(err, null)
    });
};