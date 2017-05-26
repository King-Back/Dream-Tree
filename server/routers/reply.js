const express = require('express');
const Comment = require('./../dbs/Model/comment');

const router = express.Router();

router.post("/replyComment", (req, res) => {
    Comment.find({problemId: req.body.id}, (err, data) => {
        if (err) {
            return err;
        }
        if (data.length != 0 && data.length) {
            updateComments(req.body, res);
        } else {
            insertComments(req.body, res)
        }
    });
});

function updateComments(info, res) {

    Comment.update({problemId: info.id}, {
        $push: {
            "replyInfos": {author: info.author, content: info.comment}
        }
    }).exec(function (err, data) {
        findComments(info, res);
    })
}

function insertComments(info, res) {
    const comment = new Comment({
        problemId: info.id,
        replyInfos: [{author: info.author, content: info.comment}]
    });

    comment.save(function (err) {
        findComments(info, res);
    });

}

function findComments(info, res) {
    Comment.find({problemId: info.id}).sort({'createdAt': -1}).exec(function (err, info) {
        if(!info[0]) {
            res.json({comments: []});
        } else
            res.json({comments: info[0].replyInfos});
    });
}

module.exports = router;