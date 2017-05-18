const Problem = require('./../dbs/Model/problem');

exports.getAllProblems = function (req, res) {
    Problem.find().sort({'createdAt': -1}).exec(function (err, info) {
        if (err)
            return res.status(500).json({error: err.message});
        console.log(info);
        res.json({info});
    });
};