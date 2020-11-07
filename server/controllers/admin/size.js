/**
 * Rooms controller
 */
import app from '../../app';

exports.index = async function (req, res) {
  return app.render(req, res, '/admin/size');
}