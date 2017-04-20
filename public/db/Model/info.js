var mongoose = require('mongoose');
var InfoSchema = require('../Schema/infoSchema');

module.exports = mongoose.model('Info', InfoSchema);