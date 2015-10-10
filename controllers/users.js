var User = require('../models/user.js');
var passport = require('passport');

module.exports = {
  post: function(req, res) {
    if (req.body.password && req.body.password_copy) {
      if (req.body.password == req.body.password_copy) {
        /* Needs to be changed based on user model */
        
        var newUser = new User({
          username: req.body.username,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          location: req.body.location,
          description: req.body.description,
          email: req.body.email,
          tsRegister: Date.now(),
          tags: [],
          hirable: true,
          openJobs: [],
          closedJobs: [],
          numRatings: 0,
          avgRating: 0
        });

        User.register(newUser, req.body.password, function(err, acct) {
          if (err) return console.error(err);
          passport.authenticate('local')(req, res, function () {
            console.log('You are ' + req.user);
            res.redirect('/');
          });
        });
        
      } else {
        console.log("Passwords did not match");
        res.render('register');
      }
    } else {
      console.log("Passwords did not match");
      res.render('register');
    }
  }
}