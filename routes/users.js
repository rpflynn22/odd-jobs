var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // TODO: this should return some type of list of users.
  res.redirect('/');
});

router.get('/new', function(req, res) {
  if (req.query.err) {
    data = {error: req.query.err};
  } else {
    data = {};
  }
  res.render('register', data);
});

router.get('/edit', function(req, res) {
  res.render('user-edit');
});

router.put('/', userController.put);
router.post('/', userController.post);

module.exports = router;
