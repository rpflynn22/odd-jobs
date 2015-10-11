var express = require('express');
var router = express.Router();
var passport = require('passport');
var general = require('../general');

var userController = require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  data = {};
  data.user = req.user;
  console.log(data);
  general.getZipCoords(94568);
  res.render('index', data);
});

router.get('/login', function(req, res) {
  data = {};
  data.user = req.user;
  if (req.query.err) {
    data.error = req.query.err;
  }
  res.render('login', data);
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/checklogin', function(req, res) {
  res.json(req.user);
});

router.get('/register', function(req, res) {
  res.redirect('/users/new');
});

/* Logs the user out, returns to the signin page */
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
