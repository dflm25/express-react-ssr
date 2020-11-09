/**
 * Auth app routes
 */
import express from 'express';
import homeController from '../controllers/admin/home';
import sizeController from '../controllers/admin/size';

import { sessionChecker } from '../middleware';

const router = express.Router();

router.get('/', homeController.index);

// Sizes routes
router.get('/size', sizeController.index);
router.get('/size/datatable', sizeController.datatable);

export default router