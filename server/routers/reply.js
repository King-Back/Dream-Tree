const express = require('express');
const Comment = require('./../dbs/Model/comment');

const router = express.Router();

router.post("/replyComment", (req, res) => {
    Comment.find({problemId: req.body.id}, (err, data) => {
        if (err) {
            return err;
        }
        if (data.length != 0 && data.length) {
            updateComments(req.body);
        } else {
            insertComments(req.body)
        }
    });
});

function updateComments(info) {

    Comment.update({problemId: info.id}, {
        $push: {
            "replyInfos": {author: info.author, content: info.content}
        }
    }).sort({'updatedAt': -1}).exec(function (err, info) {
        if(err) {
            console.log(err);
            return err;
        } else {
            console.log(1);
            return 1;
        }
    })
}

function insertComments(info) {
    const comment = new Comment({
        problemId: info.id,
        replyInfos: [{author: info.author, content: info.content}]
    });

    comment.save(function (err) {
        if (err) {
            console.log(err);
            return err;
        } else {
            console.log(1);
            return 1;
        }
    })

}

module.exports = router;