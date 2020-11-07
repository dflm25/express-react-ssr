/**
 * Rooms controller
 */
import app from '../../app';
import pathMatch from 'path-match';

const route = pathMatch();

exports.index = async function (req, res) {
  const params = route('/artist/:id')(parse(req.url).pathname);
  return app.render(req, res, '/artist', params);
}