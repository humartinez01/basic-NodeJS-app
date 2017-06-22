var express = require('express')
var router = express.Router()
var users = require('../controllers/users')

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log( users.index() )

  res.render('index', { title: 'Express', content: '' });
});

router.get('/test', function(req, res, next) {

  users.test(function(err, content) {

    if(err) {

      console.log(err);
      res.render('index', { title: 'Express' });

    } else {

      console.log(content);
      res.render('index', { title: 'Express', content: content });

    }

  });

});

module.exports = router;
