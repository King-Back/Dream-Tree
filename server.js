const express = require('express');
const app = new express();
const path = require('path');

const db = require('./public/db/connection');
const execute = require('./public/db/execute');

app.use(express.static(__dirname + '/public'));

app.get('/getProblem', execute.getProblem);

app.listen(3000, () => {
    console.log('server start');
});

