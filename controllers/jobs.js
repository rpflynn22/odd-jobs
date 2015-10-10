var Job = require('../models/job.js');

module.exports = {
  post: function(req, res) {
    if (newJobIsValid(req)) {
      var newJob = new Job({
        title: req.body.title,
        //tags: req.body.tags,
        creator: req.body.username,
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
  return (req.body.title && req.body.description && req.body.salary && req.body.location);
}
