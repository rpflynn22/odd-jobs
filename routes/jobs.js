var express = require('express');
var router = express.Router();
var jobController = require('../controllers/jobs');

var Job = require('../models/job');

router.get('/view', function(req, res) {
  res.render('jobs');
});

router.get('/', function(req, res) {
  res.render('job-create');
});

router.post('/', jobController.post);

//TODO: Update this so that jobId is passed into the page.
router.get('/:jobId', function(req, res) {
  res.render('job-detail');
});

module.exports = router;
