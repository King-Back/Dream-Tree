const Problem = require('./Model/problem');

exports.getProblem = function(req, res) {
    Problem.find().sort({'createdAt': -1}).exec(function (err, info) {
        if (err) return res.status(500).json({error: err.message});
        res.send(info);
    });
};