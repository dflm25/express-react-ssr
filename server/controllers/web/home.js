/**
 * Rooms controller
 */
import path from 'path';

exports.index = async function (req, res) {
  console.log('pase por aqui');
  res.render('home');
}