var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/movielist', {
  useNewUrlParser : true
});
var db = mongoose.connection;
db.on('error', err => console.log(err))

var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

// middleware
app.use(bodyParser.json());

var port = 4000;

var movies = require('./routes/index');



app.get('/', function(req, res){
    res.send('Welcome to Movielist');
})

app.use('/api', movies)

if (process.env.NODE_ENV === 'production'){
    app.set(express.static('client/dist'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}



app.listen(port, () => {`Server starts at port ${port}`});