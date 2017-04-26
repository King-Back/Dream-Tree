const express = require('express');
const app = new express();
const path = require('path');

var bodyParser = require('body-parser');
const cors = require('cors');

const hello = require('./server/routers/hello');
const writeProblem = require('./server/routers/write-problem');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

const db = require('./server/dbs/connection');
const execute_1 = require('./server/routers/show-problem');
const execute_2 = require('./server/routers/problems-list');

app.use(express.static(__dirname + '/public'));

app.get('/getProblem', execute_1.getProblem);
app.get('/getAllProblems', execute_2.getAllProblems);
app.use("/", hello);

app.use('/', writeProblem);

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('server start');
});

