var express = require('express');
var router = express.Router();
var passport = require('passport');

var userController = require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user);
  res.render('index', { title: 'Odd Jobs' });
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/checklogin', function(req, res) {
  res.send(req.user);
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
