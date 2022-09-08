import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';


//Import db packages
import mongoose from 'mongoose';

// Import auth packages
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// Import for JWT, for next lecture
import cors from 'cors';

// alias for auth objects
let localStrategy = passportLocal.Strategy;

// Import routers
import indexRouter from '../routes/router.index';
import movieRouter from '../routes/router.movie';
import authRouter from '../routes/router.auth';
import businessRouter from '../routes/router.business';

const app = express();

// Import user model
import User from '../models/user.js';

// DB Configuration
import * as DBConfig from './db';

mongoose.connect(DBConfig.RemoteURI);
const db = mongoose.connection;
db.on("open", function(){console.log(`Connected to MongoDB at: ${DBConfig.HostName}`)});
db.on("error", function(){console.error("Connection Error.")});

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use(cors()); // adds CORS (cross-origin resource sharing) to the config

app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false
}));

app.use(flash());

//initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// Implement Auth strategy
passport.use(User.createStrategy());

// Set up serialization
passport.serializeUser(User.serializeUser() as any);
passport.deserializeUser(User.deserializeUser());

app.use('/', indexRouter);
app.use('/', movieRouter);
app.use('/', authRouter);
app.use('/', businessRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: express.Request, res:express.Response, next: express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
