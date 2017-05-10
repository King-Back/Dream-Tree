const express = require('express');
const User = require('./../dbs/Model/user');

const router = express.Router();

router.post("/userInfo", (req, res) => {

    User.find({username: req.body.userName, password: req.body.userPassword}, (err, data) => {
        if (err) {
            res.json({isSuccess: false});
        }
        if (data.length != 0 && data.length) {
            res.cookie('username', req.body.userName, {maxAge: 10000});
            res.json({isSuccess: true});
        } else {
            res.json({isSuccess: false});
        }
    });
});

module.exports = router;