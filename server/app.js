/**
 * Server app
 */
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import session from 'express-session';
import database from '../database';
import {handleErrors, handleSession} from './middleware';

// routes
import routes from './routes';

const app = express();

// View engine setup
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, '../views/partials'),
  layoutsDir: path.join(__dirname, '../views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname, '../views'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'user_sid',
  secret: 'e8b71696-1d73-4ac0-af5c-037db2382715',
  resave: false,
  saveUninitialized: false,
  cookie: { expires: 9000000 }
}));

database.sequelize
 .authenticate()
 .then(() => {
  console.info('INFO - Database connected.')
 })
 .catch(err => {
  console.error('ERROR - Unable to connect to the database:', err)
});

// setting routes
routes(app);

// handle session
handleSession(app);

// Handle errors
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { code :  err.status });
});

module.exports = app;
