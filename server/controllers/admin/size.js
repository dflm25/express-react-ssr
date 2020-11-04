/**
 * Rooms controller
 */
import React from "react";
import {renderToString} from "react-dom/server";
import Size from '../../../frontend/admin/pages/Size';

exports.index = async function (req, res) {
  const reactComp = renderToString(<Size />);
  res.status(200).render('admin/index', { layout: 'admin.hbs', reactApp: reactComp, file: 'size' });
}