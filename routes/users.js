var express = require('express');
var router = express.Router();
var user = require('../controllers/user')

router.get('/', user.index);

router.get('/create', function(req, res) {
  res.send('user.create');
});

router.post('/store', function(req, res) {
  res.send('user.create');
});

router.get('/:id/edit', function(req, res) {
  res.send('user.edit: ' + req.params.id);
});

router.put('/:id/update', function(req, res) {
  res.send('user.edit: ' + req.params.id);
});

module.exports = router;
