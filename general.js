var fs = require('fs');
var request = require('request');

module.exports = {
  /**
   * Generates the URI to connect to the MongoDB hosted by MongoLab.
   */
  generateMongoURI: function() {
    var configs = JSON.parse(fs.readFileSync('./configs.json'));
    var mongoUname = configs.storage.mongolab.username;
    var mongoPass = configs.storage.mongolab.password;
    return 'mongodb://' + mongoUname + ':' + mongoPass +
         '@ds035664.mongolab.com:35664/odd-jobs'
  },

  validateJobTags: function(tags) {
    return tags.length >= 1;
  },

  validateLocation: function(zipCode) {
    return zipCode.toString().length == 5;
  },

  validateDistance: function(distance) {
    return distance > 0;
  },

  getZipCoords: function(zip) {
    var configs = JSON.parse(fs.readFileSync('./configs.json'));
    var key = configs.zipCodeApi.apiKey;
    var uri = 'https://www.zipcodeapi.com/rest/' + key + '/info.json/' + zip.toString() + '/degrees';
    request(uri, function(err, res, body) {
      if (!err && res.statusCode == 200) {
        return {'lng': JSON.parse(body).lng, 'lat': JSON.parse(body).lat};
      }
      return console.error(err);
    });
  }
};
