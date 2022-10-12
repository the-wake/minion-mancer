const createError = require('http-errors');
const express = require('express');
const routes = require('./routes');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


// This is the auto-generated routing from Express, but I use a routes/index.js to handle routing.
// const indexRouter = require('./routes');
// const testAPI = require('./routes/testAPI.js');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// This is the auto-generated routing from Express, but I use a routes/index.js to handle routing.
// app.use('/', indexRouter);
// app.use('/test', testAPI);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
