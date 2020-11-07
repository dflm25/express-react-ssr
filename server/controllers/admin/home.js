/**
 * Rooms controller
 */
import app from '../../app';
import pathMatch from 'path-match';
import { parse } from 'url';

const route = pathMatch();

exports.index = async function (req, res) {
  // console.log('Session', req.session.user);
  // const params = route('/admin/:id')(parse(req.url).pathname);
  return app.render(req, res, '/admin' /*, params*/);
}