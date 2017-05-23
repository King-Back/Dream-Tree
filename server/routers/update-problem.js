const Problem = require('./../dbs/Model/problem');

exports.updateProblem = function (req, res) {
    Problem.update({_id: req.body.id}, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        }
    }).sort({'updatedAt': -1}).exec(function (err, info) {
        if (err) return res.status(500).json({error: err.message});
        res.json({tip:"success"});
    })
};