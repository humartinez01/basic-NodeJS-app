var express = require('express');
var router = express.Router();
var users = require('../controllers/postgre')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {

  users.test(function(err, content) {

    if(err) {

      console.log(err);
      res.render('index', { title: 'Express' });

    } else {

      content.forEach(function (model) {
        console.log(model.attributes.name)
      })

      res.render('index', { title: 'Express', content: content });

    }

  });

});

module.exports = router;
