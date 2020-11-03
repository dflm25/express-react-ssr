/**
 * Rooms controller
 */
import React from "react";
import {renderToString} from "react-dom/server";
import Home from '../../../frontend/admin/pages/Home';

exports.index = async function (req, res) {
  const reactComp = renderToString(<Home />);
  res.status(200).render('admin/home', { layout: 'admin.hbs', reactApp: reactComp });
}