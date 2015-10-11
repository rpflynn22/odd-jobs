var express = require('express');
var router = express.Router();
var jobController = require('../controllers/jobs');

var Job = require('../models/job');

router.get('/', jobController.get);
router.post('/', jobController.post);

router.get('/create', function(req, res) {
  data = {};
  data.user = req.user;
  res.render('job-create', data);
});

//TODO: Update this so that jobId is passed into the page.
router.get('/:jobId', function(req, res) {
  data = {};
  data.user = req.user;
  res.render('job-detail', data);
});

module.exports = router;
