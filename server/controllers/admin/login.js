/**
 * Rooms controller
 */

import pathMatch from 'path-match';
import app from '../../app';
import db from '../../../database';

const route = pathMatch();

exports.index = async function (req, res) {
  return app.render(req, res, '/auth/login');
}

exports.login = async function (req, res) {
  const { email, password } = req.body;

  db.User.findOne({ where: { email: email } }).then(function (user) {
    if (!user || !user.validPassword(password)) {
        res.redirect('/auth/login');
    } else {
        req.session.user = user.dataValues;
        res.redirect('/admin');
    }
  });
}