/**
 * Rooms controller
 */

import pathMatch from 'path-match';
import app from '../../app';
import db from '../../../database';
import { parse } from 'url';

const route = pathMatch();

exports.index = async function (req, res) {
  const params = route('/admin/:id')(parse(req.url).pathname);
  return app.render(req, res, '/admin', params);
}

exports.login = async function (req, res) {
  const { email, password } = req.body;

  db.User.findOne({ where: { email: email } }).then(function (user) {
    if (!user || !user.validPassword(password)) {
        res.redirect('/admin/login');
    } else {
        req.session.user = user.dataValues;
        res.redirect('/admin');
    }
  });
}