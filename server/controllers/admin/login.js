/**
 * Rooms controller
 */

import pathMatch from 'path-match';
import passport from 'passport';
import app from '../../app';
import { getToken } from '../../passport';

const route = pathMatch();

exports.index = async function (req, res) {
  return app.render(req, res, '/auth/login');
}

exports.login = async function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return res.status(400).json({ errors: err });
    }
    if (!user) {
      return res.status(400).json({ errors: 'User no found' });
    }

    req.logIn(user, (err)=> {
      const token = getToken(user);

      if (err) {
        return res.status(400).json({ errors: err });
      }

      return res.status(200).json({ user: user, token });
    })
  })(req, res, next);
}