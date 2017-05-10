const express = require('express');

const router = express.Router();

router.get("/cookies", (req, res) => {
    console.log(req.cookies);
    if(req.cookies.username) {
        res.json(req.cookies.username);
    } else {
        res.json("");
    }
});

module.exports = router;