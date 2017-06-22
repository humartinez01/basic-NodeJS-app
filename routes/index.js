var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("Hola mundo desde routes")
  
  res.render('index', { title: 'Express', hola: 'Hola mundo' });
});

module.exports = router;
