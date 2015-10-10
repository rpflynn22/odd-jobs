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

router.get('/jobs', function(req, res) {
  res.render('jobs');
});

router.get('/jobs/create', function(req, res) {
  res.render('job-create');
});


router.get('/jobs/:jobId', function(req, res) {
  res.render('job-detail');
})

// TODO: Appropriately create a Job object.
router.post('/jobs/create', function(req, res) {
  if (newJobIsValid(req)) {
    var newJob = new Job({
      title: req.body.title,
      // tags: req.body.tags,
      creator: req.body.username, // Pass in username into the request.
      description: req.body.description,
      salary: req.body.salary,
      location: req.body.location,
      // postDate: Number,
      // earliestDate: Number,
      // latestDate: Number,
      isOpen: true
    });

    newJob.save(function(err) {
      if (err) throw err;
        console.log("Saved job successfully!");
      });
  } else {
    console.log("Necessary job fields did not exist!")
    res.render('job-create');
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

function newJobIsValid(req) {
  return (req.body.title && req.body.description && req.body.salary && req.body.location);
}

module.exports = router;
