const express = require('express');
const app = new express();
const path = require('path');

var bodyParser = require('body-parser');
const cors = require('cors');

const hello = require('./server/routers/hello');

app.use(express.static(__dirname + '/public'));

app.use("/", hello);

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const db = require('./server/dbs/connection');
const execute = require('./server/dbs/execute');

app.use(express.static(__dirname + '/public'));

app.get('/getProblem', execute.getProblem);

app.listen(3000, () => {
    console.log('server start');
});

