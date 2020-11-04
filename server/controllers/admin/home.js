/**
 * Rooms controller
 */
import React from "react";
import {renderToString} from "react-dom/server";
import Home from '../../../frontend/admin/pages/Home';

exports.index = async function (req, res) {
  const reactComp = renderToString(<Home />);
  res.status(200).render('admin/index', { layout: 'admin.hbs', reactApp: reactComp, file: 'home' });
}