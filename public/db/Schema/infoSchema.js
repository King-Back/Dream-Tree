var mongoose = require('mongoose');

var InfoSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true},
        writer: {type: String, unique: true, required: true}
    },
    {timestamps: true}
);

module.exports = InfoSchema;