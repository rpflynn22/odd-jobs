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
  data = {};
  if (req.query.err) {
    data.error = req.query.err;
  }
  res.render('login', data);
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) return console.error(err);
    if (!user) {
      // login failed
      var errMsg = encodeURIComponent("That's not right!");
      res.redirect('/login?err=' + errMsg);
      return console.error('invalid login');
    }
    req.logIn(user, function(err) {
      return res.redirect('/');
    });
  })(req, res, next);
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
