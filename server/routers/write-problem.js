const express = require('express');

const router = express.Router();

router.post("/problemInfo", (req, res) => {
    console.log(req.body);
    res.json({isSuccess: true});
});

module.exports = router;