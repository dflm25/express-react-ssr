/**
 * activate react
 */
import React from "react";
import {hydrate} from "react-dom";
import Size from '../../pages/Size';

hydrate(<Size />, document.getElementById("root"));