/**
 * Passport settings
 */
import passport from 'passport';
import jwt from 'jsonwebtoken';
import LocalStrategy from 'passport-local';
import db from '../../database';

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy.Strategy({ usernameField: 'email', passwordField: 'password' },function(username, password, done) {
  db.User.findOne({ where: { email: username } }).then(function (user) {
    if (!user || !user.validPassword(password)) {
        return done(null, false, { message: 'Invalid credentials.' });
    }
    return done(null, user);
  });
}));

export default passport;

export const getToken = (user) => {
  const doc = { username: user };
  return jwt.sign(doc, 'my-secret', { expiresIn: 60 * 60 * 24 });
}
