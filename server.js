const express = require('express');
const app = new express();
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const hello = require('./server/routers/hello');
const writeProblem = require('./server/routers/write-problem');
const login = require('./server/routers/login');
const register=require('./server/routers/register');
const getCookies = require('./server/routers/cookies');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

const db = require('./server/dbs/connection');
const showProblem = require('./server/routers/show-problem');
const problemsList = require('./server/routers/problems-list');
const updateProblem = require('./server/routers/update-problem');

app.use(express.static(__dirname + '/public'));

app.get('/getProblem/:id', showProblem.getProblem);
app.get('/getAllProblems', problemsList.getAllProblems);
app.post('/updateProblem', updateProblem.updateProblem);
app.use("/", hello);

app.use('/', writeProblem);

app.use('/', login);

app.use('/register',register.register);

app.use('/', getCookies);

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('server start');
});

