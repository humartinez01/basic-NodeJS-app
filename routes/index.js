var express = require('express')
var router = express.Router()
var users = require('../controllers/users')
var userList = null

/* GET home page. */
router.get('/', function(req, res, next) {

  userList = users.index()
  
  res.render('index', { title: 'Express', users: userList });
});

module.exports = router;
