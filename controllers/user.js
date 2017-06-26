/**
 * Created by frosales on 22/06/2017.
 */

var model = require('../models/user');

/**
 * User Index
 * @param req
 * @param res
 */
exports.index = function(req, res) {
    model.list(function (err, content) {
        if (err) {
            console.log(err);
        } else {
            res.render('user/index', { title: 'User.index', content: content.toJSON() });
        }
    })
}

/**
 * User Create
 * @param req
 * @param res
 */
exports.create = function(req, res) {
    model.list(function (err, content) {
        if (err) {
            console.log(err);
        } else {
            res.render('user/create', { title: 'User.create', content: content.toJSON() });
        }
    })
}

/**
 * User Edit
 * @param req
 * @param res
 */
exports.edit = function(req, res) {
    model.list(function (err, content) {
        if (err) {
            console.log(err);
        } else {
            res.render('user/edit', { title: 'User.edit', id: req.params.id });
        }
    })
}