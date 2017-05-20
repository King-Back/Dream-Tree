const Problem = require('./../dbs/Model/problem');

exports.updateProblem = function (req, res) {
    Problem.update({_id: req.problem.id}, {
        $set: {
            title: req.problem.title,
            description: req.problem.description,
            author: req.problem.author
        }
    }).sort({'updatedAt': -1}).exec(function (err, info) {
        if (err) return res.status(500).json({error: err.message});
        console.log(info);
        res.send("success");
    })
};