var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("ssssssssssss");
  res.send('respond with a resource');
});

router.get('/login', function(req, res) {
  res.render('login');
});


router.get('/register', function(req, res) {
  res.render('register');
});

router.post('/register', function(req, res) {
  console.log("=============");
  console.log(req.body.password);
  console.log(req.body.password_copy);
  if (req.body.password == req.body.password_copy) {
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
