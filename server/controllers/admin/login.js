/**
 * Rooms controller
 */
import path from 'path';
import { defaultMaxListeners } from 'stream';
import db from '../../../database';

exports.index = async function (req, res) {
  const currentYear = new Date().getFullYear();
  res.render('admin/auth/login', { currentYear });
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