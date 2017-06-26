var express = require('express');
var router = express.Router();
var user = require('../controllers/user')

router.get('/', user.index);

router.get('/create', user.create);

router.post('/store', function(req, res) {
  res.send('user.store');
});

router.get('/:id/edit', user.edit);

router.put('/:id/update', function(req, res) {
  res.send('user.update: ' + req.params.id);
});

router.delete('/:id', function(req, res) {
  res.send('user.delete: ' + req.params.id);
});

module.exports = router;
