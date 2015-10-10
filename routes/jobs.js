var express = require('express');
var router = express.Router();

var Job = require('../models/job');

router.get('/', function(req, res) {
  res.render('jobs');
});

router.get('/create', function(req, res) {
  res.render('job-create');
});

//TODO: Update this so that jobId is passed into the page.
router.get('/:jobId', function(req, res) {
  res.render('job-detail');
});

module.exports = router;
