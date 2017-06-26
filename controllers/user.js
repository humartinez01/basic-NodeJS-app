/**
 * Created by frosales on 22/06/2017.
 */

var model = require('../models/user');

exports.index = function(req, res) {
    model.list(function (err, content) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', { title: 'User.index', content: content.toJSON() });
        }
    })
}