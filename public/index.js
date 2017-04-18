var bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Time-in-place');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function () {
    console.log('success!');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('./', {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['html', 'js', 'css'],
    index: ['index.html'],
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
}));

app.listen(3001, function () {
    console.log('Express server is listening on port ' + 3001);
});

