var fs = require('fs');

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
    }
};