var mongoose = require('mongoose');
var CommentSchema = require('../Schema/commentSchema');

module.exports = mongoose.model('Comment', CommentSchema);