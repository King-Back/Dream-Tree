const Info = require('./Model/info');

exports.getAllInfo = function(req, res) {
    Info.find().sort({'createdAt': -1}).exec(function (err, info) {
        if (err) return res.status(500).json({error: err.message});
        res.send(info);
    });
};