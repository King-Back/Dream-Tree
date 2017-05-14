const User = require("../dbs/Model/user");

exports.register = function (req, res) {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function (err) {
        if (err) {
            return res.json({tip: err.message});
        } else {
            res.cookie("username",req.body.username);

            return res.json({tip: "register success"});
        }
    })
};
