var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/db');

var db = mongoose.connection;

db.on('error', console.log);

db.once('open', function () {
    console.log('success!');
});

module.exports = db;