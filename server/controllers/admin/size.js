/**
 * Rooms controller
 */
import app from '../../app';
import db from '../../../database';

exports.index = async function (req, res) {
  return app.render(req, res, '/admin/size');
}

exports.datatable = async function (req, res) {
  const { page, limit: size } = req.query;
  const limit = parseInt(size);
  const offset = parseInt(page) * parseInt(size);

  db.Size.findAndCountAll({ limit: limit, offset: offset, where: {} }).then(function (data) {
    return res.status(200).json(data);
  });
}