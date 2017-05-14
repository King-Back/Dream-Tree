const express = require('express');
const Problem = require('../dbs/Model/problem');
const router = express.Router();

router.post("/problemInfo", (req, res) => {

    console.log(req.body);
   const problem = new Problem({
        title: req.body.title,
        description: req.body.content,
        auther: req.body.author
    });

   problem.save(function (err) {
       console.log(err);
        if (err) {
            res.json({isSuccess:false});
        } else {
            res.json({isSuccess:true});
        }
   })

});

module.exports = router;