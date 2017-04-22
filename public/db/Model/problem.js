var mongoose = require('mongoose');
var ProblemSchema = require('../Schema/problemSchema');

module.exports = mongoose.model('Problem', ProblemSchema);