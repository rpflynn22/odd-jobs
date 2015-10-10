var express = require('express');
var router = express.Router();
var passport = require('passport');
var localStrategy = require('passport-local');
// var User = require('./models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Odd Jobs' });
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', passport.authenticate('local-signin', {
  successRedirect: '/',
  failureRedirect: '/login'
  })
);

router.get('/register', function(req, res) {
  res.render('register');
});

/* Logs the user out, returns to the signin page */
router.get('/logout', function(req, res){
  // var name = req.user.username;
  // console.log("LOGGING OUT " + req.user.username)
  // req.logout();
  res.redirect('/login');
  // req.session.notice = "You have successfully been logged out " + name + "!";
});

module.exports = router;
