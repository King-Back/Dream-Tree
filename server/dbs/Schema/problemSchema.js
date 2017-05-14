var mongoose = require('mongoose');

var ProblemSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        auther: {type: String, required: true}
    },
    {timestamps: true}
);

module.exports = ProblemSchema;