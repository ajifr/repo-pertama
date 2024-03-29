var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var mongoose = require('mongoose'); // REQUIRE MONGOOSE

var indexRouter = require('./routes/index');
var articlesRouter = require('./routes/articles');

// SET CONNECTION MONGODB
// mongodb://ajiuser:123456qwerty@maxwell-shard-00-00-iownt.mongodb.net:27017,maxwell-shard-00-01-iownt.mongodb.net:27017,maxwell-shard-00-02-iownt.mongodb.net:27017/test?ssl=true&replicaSet=Maxwell-shard-0&authSource=admin&retryWrites=true&w=majority
// mongodb://user-db:123456qwerty@company-website-db-shard-00-00-m7end.mongodb.net:27017,company-website-db-shard-00-01-m7end.mongodb.net:27017,company-website-db-shard-00-02-m7end.mongodb.net:27017/test?ssl=true&replicaSet=company-website-db-shard-0&authSource=admin&retryWrites=true&w=majority
let mongo_db_url = "mongodb://ajiuser:123456qwerty@maxwell-shard-00-00-iownt.mongodb.net:27017,maxwell-shard-00-01-iownt.mongodb.net:27017,maxwell-shard-00-02-iownt.mongodb.net:27017/test?ssl=true&replicaSet=Maxwell-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(mongo_db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// get the default connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Koneksi Anda Gagal:'));
db.once('open', function() {
    console.log('Berhasil Terkoneksi Ke Database ajiuser.');
});

var app = express();

app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/', indexRouter);
app.use('/articles', articlesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;