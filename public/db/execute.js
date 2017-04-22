const Info = require('./Model/info');

exports.getProblem = function(req, res) {
    Info.find().sort({'createdAt': -1}).exec(function (err, info) {
        if (err) return res.status(500).json({error: err.message});
        console.log("getProblem is starting...");
        res.send(info);
    });
};