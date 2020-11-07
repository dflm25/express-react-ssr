/**
 * Server app
 */
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';
import database from '../database';
import next from 'next';
import {handleErrors, handleSession} from './middleware';

// routes
import routes from './routes';

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './frontend' });
const handle = app.getRequestHandler();

database.sequelize
 .authenticate()
 .then(() => {
  console.info('INFO - Database connected.')
 })
 .catch(err => {
  console.error('ERROR - Unable to connect to the database:', err)
});

// setting routes
app.prepare().then(() => {
  const server = express();
  server.use(logger('dev'));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(cookieParser());
  server.use(session({
    // key: 'user_sid',
    secret: 'e8b71696-1d73-4ac0-af5c-037db2382715',
    resave: false,
    saveUninitialized: true,
    cookie: { 
      secure: false,
      maxAge: 90000
    }
  }));

  // Application routes
  routes(server, app);
  
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // Manejador de errores

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
});

export default app;
/*
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
*/