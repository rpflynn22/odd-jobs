var Job = require('../models/job.js');

module.exports = {
  get: function(req, res) {
    // TODO: Get function
  },

  post: function(req, res) {
    if (newJobIsValid(req)) {
      console.log(req.body.lat);
      console.log(req.body.long);
      var newJob = new Job({
        title: req.body.title,
        tags: req.body.tags.split(',').map(function(str) { return str.trim(); }),
        creator: req.user._id,
        description: req.body.description,
        salary: req.body.salary,
        loc: [req.body.long, req.body.lat],
        postDate: Date.now(),
        earliestDate: Date.parse(req.body.minDate),
        latestDate: Date.parse(req.body.maxDate),
        isOpen: true
      });

      newJob.save(function(err) {
        if (err) return console.error(err);
        console.log("Created Job successfully!");
        res.redirect('view');
      });
    } else {
      console.log("Necessary job fields did not exist!");
      res.render('job-create');
    }
  }
}

function newJobIsValid(req) {
  return (req.body.title && req.body.description && req.body.salary);
}
