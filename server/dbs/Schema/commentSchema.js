const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
        problemId: {type: String, unique: true, required: true},
        replyInfos: [{author: String, content: String}]
    },
    {timestamps: true}
);

module.exports = commentSchema;