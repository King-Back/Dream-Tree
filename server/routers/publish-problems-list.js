const Problem = require('./../dbs/Model/problem');

exports.getPublishProblems= function (req, res) {
    console.log(req.params.username);
        Problem.find({author: req.params.username}).sort({'createdAt': -1}).exec(function (err, info) {
        if (err) return res.status(500).json({error: err.message});
        res.json(info);
    });
};