const express = require('express');
const Problem = require('../dbs/Model/problem');
const router = express.Router();

router.post("/problemInfo", (req, res) => {

   const problem = new Problem({
        title: req.body.title,
        description: req.body.content,
        auther: req.cookies.username
    });

   problem.save(function (err) {
        if (err) {
            res.json({isSuccess:false});
        } else {

            res.json({isSuccess:true});
        }
   })

});

module.exports = router;