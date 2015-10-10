var express = require('express');
var router = express.Router();

var passport = require('passport');
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

router.post('/register', function(req, res) {
  if (req.body.password && req.body.password_copy) {
    if (req.body.password == req.body.password_copy) {
      /* Needs to be changed based on user model */
      var newUser = new User({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        location: req.body.location,
        description: req.body.description,
        email: req.body.email
      });

      newUser.save(function(err) {
        if (err) throw err;
        console.log("Saved user successfully!");
      });
    } else {
      console.log("Passwords did not match");
      res.render('register');
    }
  } else {
    console.log("Passwords did not match");
    res.render('register');
  }
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
