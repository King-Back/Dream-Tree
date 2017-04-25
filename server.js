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
//
// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/Time-in-place');
//
// var db = mongoose.connection;
// db.on('error', console.log);
// db.once('open', function () {
//     console.log('success!');
// });
//
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
//
// app.use(cors());

app.listen(3000, () => {
    console.log('server start');
});

