const userSchema = require('../Schema/userSchema');
const mongoose = require('mongoose');

module.exports = mongoose.model('User', userSchema);